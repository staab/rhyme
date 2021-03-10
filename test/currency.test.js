import {assert} from 'chai'
import Currency from 'rhyme/Currency'

describe('currency', () => {
  describe('formatNumeric', () => {
    it('formats cents correctly', () => {
      assert.equal(Currency.formatNumeric(1), '0.01')
      assert.equal(Currency.formatNumeric(20), '0.20')
      assert.equal(Currency.formatNumeric(100), '1.00')
      assert.equal(Currency.formatNumeric(101), '1.01')
      assert.equal(Currency.formatNumeric(2934), '29.34')
    })
  })

  describe('parseNumeric', () => {
    it('parses a currency string to a decimal', () => {
      assert.equal(Currency.parseNumeric('0.01'), 1)
      assert.equal(Currency.parseNumeric('1.00'), 100)
      assert.equal(Currency.parseNumeric('1.01'), 101)
      assert.equal(Currency.parseNumeric('29.34'), 2934)
      assert.equal(Currency.parseNumeric('3.'), 300)
    })
  })

  describe('format', () => {
    it('formats cents correctly', () => {
      assert.equal(Currency.format(1), '$0.01')
      assert.equal(Currency.format(100), '$1.00')
      assert.equal(Currency.format(101), '$1.01')
      assert.equal(Currency.format(2934), '$29.34')
    })
  })

  describe('parse', () => {
    it('parses a currency string to a decimal', () => {
      assert.equal(Currency.parse('$0.01'), 1)
      assert.equal(Currency.parse('$1.00'), 100)
      assert.equal(Currency.parse('$1.01'), 101)
      assert.equal(Currency.parse('$29.34'), 2934)
    })
  })

  describe('formatDollars', () => {
    it('formats dollars correctly', () => {
      assert.equal(Currency.formatDollars(1), '$0')
      assert.equal(Currency.formatDollars(100), '$1')
      assert.equal(Currency.formatDollars(101), '$1')
      assert.equal(Currency.formatDollars(2934), '$29')
    })
  })

  describe('parseDollars', () => {
    it('parses a dollar string to a decimal', () => {
      assert.equal(Currency.parseDollars('$0'), 0)
      assert.equal(Currency.parseDollars('$1'), 100)
      assert.equal(Currency.parseDollars('$1'), 100)
      assert.equal(Currency.parseDollars('$29'), 2900)
    })
  })

  describe('formatK', () => {
    it('formats large quantities correctly', () => {
      assert.equal(Currency.formatK(12983767), '$129.7k')
    })
  })
})
