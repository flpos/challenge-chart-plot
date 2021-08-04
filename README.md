# Chart Plot Challenge

## Objective

Develop a application thats receive events data from the user and show the data on the chart.

## Overview

Because of the similarity of the input data with the javascript object i used `eval` to transform each line in a js object.

the event processing is independant and prepares the data to be used on the `nivo` chart package.

The input element comes from a package called `@uiw/react-codemirror`, a react adaptation of the CodeMirror Editor.

I used the `styled-components` to write the component's styles, it's simple and integrates well with react.

The styles live primarily in the various `styled.ts` files, with few exceptions.

The folder structure is inspired by DDD, separating files and functions by domain.

## Application

https://flpos.github.io/challenge-chart-plot/
