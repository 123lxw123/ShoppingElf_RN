import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import HottestDiscountListScreen from './HottestDiscountListScreen';
import LatestDiscountListScreen from './LatestDiscountListScreen';
import DiscountDetailScreen from './DiscountDetailScreen';

const bottomTabNavigator = createBottomTabNavigator({
  HottestDiscountList: HottestDiscountListScreen,
  LatestDiscountList: LatestDiscountListScreen,
});
const navigator = createStackNavigator({
  BottomTab: bottomTabNavigator,
  DiscountDetail: DiscountDetailScreen,
});

export default createAppContainer(navigator);
