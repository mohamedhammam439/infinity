import React, {Component} from 'react';
import applyFilters from '_helpers/functions/filters';
import {FlatList} from 'react-native';
import NoData from '_helpers/no_data'
import {View} from 'react-native';
import {pick} from 'lodash';

class List extends Component {
  render() {
    const {fun, empty=true, MasterComponent, card, styles, picks, extra, ...mainProps} = this.props;
    // const {fun} = (mainApp.list || {})
    const list = applyFilters(fun, undefined, {props: this.props})
    const maxIndex = list.length-1
    // console.log(list)
    return (
      <View styles={styles?.container}>
        <FlatList
          keyboardShouldPersistTaps='handled'
          data={list}
          style={styles?.list}
          renderItem={(props)=>(<MasterComponent {...{...props, maxIndex, ...card, ...pick(mainProps, picks)}} />)}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={empty && NoData}
          {...extra}
        />
      </View>
    );
  }
}
export default List;
