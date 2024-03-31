import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import "echarts-gl";
import earth from "../assets/earth.jpg";
import stars from "../assets/starfield.jpg";

function GlobeChart() {
  const chartRef = useRef(null);
  
  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom);

    const cityData = [
      { name: "New York", coord: [-74.006, 40.7128] },
      { name: "Tokyo", coord: [139.6917, 35.6895] },
      { name: "London", coord: [-0.1276, 51.5074] },
    ];

    const option = {
      backgroundColor: "#000",
      globe: {
        baseTexture: earth,
        heightTexture: earth,
        environment: stars,
        shading: "lambert",
        atmosphere: {
          show: true,
        },
        light: {
          ambient: {
            intensity: 1,
          },
          displacementQuality: "ultra",
          main: {
            intensity: 1,
          },
        },
      },
      series: [
        {
          type: "scatter3D",
          coordinateSystem: "globe",
          blendMode: "lighter",
          symbol: "pin",
          symbolSize: 50,
          label: {
            show: true,
            formatter: "{b}",
            color: "#fff",
            textStyle: {
              fontSize: 16,
              fontWeight: "bold",
            },
            position: "right",
          },
          itemStyle: {
            color: "red",
            opacity: 1,
          },
          data: cityData.map((city) => ({
            name: city.name,
            value: [...city.coord, 0],
          })),
        },
      ],
    };

    myChart.on("click", (params) => {
      setSelectedCity(params.name);
    });

    option && myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div>      
      <div ref={chartRef} style={{ width: "100%", height: "80vh" }}></div>
    </div>
  );
}

export default GlobeChart;
