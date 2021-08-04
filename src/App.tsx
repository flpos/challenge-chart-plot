import { ResponsiveLine as Chart } from '@nivo/line';
import React from 'react';
import { AppWrapper } from './App.styles';
import { ChartData, processEvents } from './chart/chartData';
import DragHandle from './components/DragHandle';
import Footer from './components/Footer';
import Header from './components/Header';
import InputArea from './components/InputArea';
import { eventStringParse } from './utils/eventStringParse';

function App() {
  const inputAreaRef = React.useRef<HTMLDivElement>(null);
  const [eventsText, setEventsText] = React.useState('');

  const [chartData, setChartData] = React.useState<Array<ChartData>>([]);

  const setInputHeight = (cb: (number: number) => number) => {
    const height = inputAreaRef.current?.clientHeight || 0;
    const newHeight = cb(height);
    if (inputAreaRef.current) {
      inputAreaRef.current.style.height = `${newHeight}px`;
    }
  };

  const handlePlotChart = React.useCallback(() => {
    try {
      const events = eventStringParse(eventsText);
      const { chartData } = processEvents(events);
      setChartData(chartData);
    } catch (e) {
      console.error(e);
    }
  }, [eventsText]);

  return (
    <AppWrapper>
      <Header />
      <InputArea
        value={eventsText}
        onChange={setEventsText}
        inputAreaRef={inputAreaRef}
      />
      <DragHandle
        setInputHeight={setInputHeight}
        inputHeight={() => inputAreaRef.current?.clientHeight || 0}
      />
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <Chart
            margin={{ top: 40, left: 90, right: 90, bottom: 40 }}
            axisBottom={{
              format: (v: number) => {
                const date = new Date();
                date.setTime(v);

                const minutes = date.getMinutes().toString().padStart(2, '0');
                const seconds = date.getSeconds().toString().padStart(2, '0');
                return `${minutes}:${seconds}`;
              },
            }}
            data={chartData}
          />
        </div>
      </div>
      <Footer plotChart={handlePlotChart} />
    </AppWrapper>
  );
}

export default App;
