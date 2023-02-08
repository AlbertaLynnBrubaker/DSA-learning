const { c } = require('../../helper/consoleLogHelper')
const { createList } = require('../../helper/createLinkedListFromArray')

class BrowserHistory {
  constructor(homepage) {
    this.head = new Page(homepage)
    this.tail = this.head
    this.current = this.head
  }

  visit(url) {
    const newPage = new Page(url)
    if(!this.head.next) {
      this.head.next = newPage
      newPage.prev = this.head
      this.tail = newPage
      this.current = newPage
    } else {
      this.tail = this.current
      this.tail.next = newPage
      newPage.prev = this.tail
      this.tail = newPage
      this.current = newPage
    }
  }

  back(steps) {
    while(steps && this.current.prev) {
      this.current = this.current.prev
      steps--
    }
    return this.current.url
  }

  forward(steps) {
    while(steps && this.current.next) {
      this.current = this.current.next
      steps--
    }
    return this.current.url
  }
}

class Page {
  constructor(url) {
    this.url = url
    this.prev = null
    this.next = null
  }
}

const bh = new BrowserHistory('leetcode.com')
bh.visit('google.com')
bh.visit('facebook.com')
bh.visit('youtube.com')
bh.back(1)
bh.back(1)
bh.forward(1)
c({c: bh.current.url})
bh.visit('linkedin.com')
c({res: bh.forward(2)})
c({res: bh.back(2)})
c({res: bh.back(7)})
