import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import SData from './Sdata';

function ncard(val){
  return(
    <Card
     key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      seriesname={val.seriesname}
      series_page_link={val.series_page_link}
    />
  );
}
ReactDOM.render(
  <>
    <h1 className='heading_style'> List of top Netflix Series</h1>
    
    {SData.map(ncard)}
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
