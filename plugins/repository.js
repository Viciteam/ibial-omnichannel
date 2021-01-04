import { SocialRepository } from '~/api'
import TicketsRepository from '~/api/tickets/tickets.repository'

export default (ctx, inject) => {
  // dependency injection
  inject('socialRepository', SocialRepository(ctx.$axios))
  inject('ticketsRepository', TicketsRepository(ctx.$axios))
}
