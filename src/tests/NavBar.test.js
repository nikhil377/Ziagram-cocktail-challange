// MyComponent.test.js
import React from 'react';
import NavBar from '../components/NavBar';
import { configure ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });
let wrapper;
beforeEach(()=>{
    wrapper = shallow(<NavBar />);
})
describe("NavBar testcase", () => {
  test('should render the navbar', () => {
     expect(wrapper.getElements()).toMatchSnapshot();
});
});
  
