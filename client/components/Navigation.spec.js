// global describe beforeEach it

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Navigation} from './Navigation'

const adapter = new Adapter()
enzyme.configure({adapter})

xdescribe('Navigation', () => {
  let navigation

  beforeEach(() => {
    navigation = shallow(<Navigation />)
  })

  it('renders the email in an div', () => {
    expect(navigation.find('div').text()).to.be.equal('Challenges')
  })
})
