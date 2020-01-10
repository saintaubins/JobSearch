import React from 'react';
import { shallow } from "enzyme";
import App from './App';

describe('App component', () => {
let component
  beforeEach(() => {
    component = shallow(<App />)
  })
  
  it('should have a header that says "Loading..."', () => {
    expect(component.contains('Loading...')).toBe(true)
  });

  it('should have a state attribute called error initialized to null', () => {
    expect(component.state('error')).toEqual(null)
  });

  it('fetches data from server when server returns a successful response', done => { // 1
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse); // 2
    const mockFetchPromise = Promise.resolve({ // 3
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise); // 4
    
    const wrapper = shallow(<App />); // 5
                            
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?description=python&full_time=true&location=newyork');

    process.nextTick(() => { // 6
      expect(wrapper.state('isLoaded')).toEqual(
         true
      );

      global.fetch.mockClear(); // 7
      done(); // 8
    });
  });

}) 
