import { IAPIRefStatus } from '../lib/api'
import { GitHubRepository } from './github-repository'

export class PullRequestRef {
  public readonly ref: string
  public readonly sha: string
  public readonly gitHubRepository: GitHubRepository

  public constructor(
    ref: string,
    sha: string,
    gitHubRepository: GitHubRepository
  ) {
    this.ref = ref
    this.sha = sha
    this.gitHubRepository = gitHubRepository
  }
}

export class PullRequest {
  public readonly id: number
  public readonly created: Date
  public readonly status: IAPIRefStatus
  public readonly title: string
  public readonly number: number
  public readonly head: PullRequestRef
  public readonly base: PullRequestRef
  public readonly author: string

  public constructor(
    id: number,
    created: Date,
    status: IAPIRefStatus,
    title: string,
    number_: number,
    head: PullRequestRef,
    base: PullRequestRef,
    author: string
  ) {
    this.id = id
    this.created = created
    this.status = status
    this.title = title
    this.number = number_
    this.head = head
    this.base = base
    this.author = author
  }
}
