import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartPage = () => {
  const [products, setProducts] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    axios.get('http://localhost:8000/products/')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    const data = {
      labels: products.map(product => product.name),
      datasets: [{
        label: 'Stock',
        data: products.map(product => product.stock),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }],
    };

    chartRef.current = new ChartJS(document.getElementById('myChart'), {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Product Stock Chart',
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [products]);

  return (
    <div>
      <h3>Product Stock Chart</h3>
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default ChartPage;
