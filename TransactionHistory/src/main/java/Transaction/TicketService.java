package Transaction;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class TicketService {
	
	@Autowired
	TicketDao dao;

	@Autowired
	TicketRepositoryImpl repo;
	
	public Iterable<Ticket> getAllTickets() {
		return repo.findAll();
	}
	
	public Ticket createTicket(Ticket ticket) {
		return repo.save(ticket);
	}
	
	public Optional<Ticket> getTicketById(Integer id) {
		return repo.findById(id);
	}
	
	public Integer findAllTicket() {
		return dao.findAllTicket();
	}
}
