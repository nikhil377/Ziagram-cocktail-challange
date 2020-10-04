// MyComponent.test.js
import React from 'react';
import Home from '../components/Home';
import { configure ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
let wrapper;
beforeEach(()=>{
    wrapper = shallow(<Home />);
})
describe("Homepage testcase", () => {
  test('should render the homepage', () => {
      expect(wrapper.getElements()).toMatchSnapshot();
});
test('it should render the search button of homepage',()=>{
    expect(wrapper.find('button').text()).toBe('Search');
})
test('it should render the input search of search bar ',()=>{
    expect(wrapper.find('#input').text()).toBe('');
})
});
  
