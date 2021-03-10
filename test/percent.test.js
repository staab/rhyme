import {assert} from 'chai'
import Percent from 'rhyme/percent'

describe('percent', () => {
  it('formats stuff with different precisions', () => {
    assert.equal(Percent.format(0.07), '7%')
    assert.equal(Percent.format(0.00007), '0.007%')
    assert.equal(Percent.format(0.00007, {precision: 1}), '0%')
  })

  it('parses stuff with different precisions', () => {
    assert.equal(Percent.parse('7%'), 0.07)
    assert.equal(Percent.parse('0.007%'), 0.00007000000000000001)
    assert.equal(Percent.parse('0.007%', {precision: -4}), 0.0001)
    assert.equal(Percent.parse('0.00724%', {precision: -6}), 0.000072)
  })
})
