import { h, render } from 'preact'
import { fetchRepositories } from './api'
import { RepoList } from './repo-list'

fetchRepositories('imyangyong').then(data => {
  render(h(RepoList, { repos: data }, null), document.body)
})
