import React, { Component } from 'react';
import Chart, {
  Axis,
  Grid,
  Area,
  Line,
  Base,
  Layers
} from 'grommet/components/chart/Chart';
import Legend from 'grommet/components/Legend';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';

class Graph extends Component {
  render() {
    const {
      statistics,
      fastMovingItems,
      slowMovingItems,
      disposalItems,
      discountedItems
    } = this.props.statistics;
    const peak = Math.max(...statistics.map(month => month.sales));
    const maxDiscount = Math.max(...statistics.map(month => month.discounts));

    return (
      <div>
        <Chart>
          <Axis
            count={5}
            labels={[
              { index: 0, label: 0 },
              { index: 2, label: Math.floor(peak / 2) },
              { index: 4, label: peak }
            ]}
            vertical
            ticks
          />
          <Chart vertical>
            <Base height="small" width="large" />
            <Layers>
              <Grid rows={5} columns={6} />

              <Area
                values={statistics.map(month => month.sales / peak * 100)}
                colorIndex="graph-1"
                smooth
              />
              <Line
                values={statistics.map(
                  month => month.discounts / maxDiscount * 100
                )}
                colorIndex="accent-1"
                smooth
              />
            </Layers>
            <Axis
              count={12}
              labels={statistics.reduce(
                (labels, month, index) =>
                  index % 2 !== 0
                    ? [
                        ...labels,
                        { index, label: month.month.substr(0, 3).toUpperCase() }
                      ]
                    : labels,
                []
              )}
              ticks
            />
            <Legend
              series={[
                { label: 'Sales', colorIndex: 'graph-1' },
                { label: 'Discounts', colorIndex: 'accent-1' }
              ]}
            />
          </Chart>
        </Chart>
        <AnnotatedMeter
          type="circle"
          total={
            fastMovingItems + slowMovingItems + disposalItems + discountedItems
          }
          series={[
            { label: 'Fast-Moving Items', value: fastMovingItems },
            { label: 'Slow-Moving Items', value: slowMovingItems },
            { label: 'Items for Disposal', value: disposalItems },
            { label: 'Items on Discount', value: discountedItems }
          ]}
          legend
        />
      </div>
    );
  }
}

export default Graph;
