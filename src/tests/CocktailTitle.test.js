// MyComponent.test.js
import React from 'react';
import CocktailTitle from '../components/CocktailTitle';
import { configure ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
let wrapper;
beforeEach(()=>{
  wrapper = shallow(<CocktailTitle />);
})
describe("CocktailTitle", () => {
  test('should render the title', () => {
      //console.log(wrapper.debug());
     expect(wrapper.getElements()).toMatchSnapshot();
});
});
  
