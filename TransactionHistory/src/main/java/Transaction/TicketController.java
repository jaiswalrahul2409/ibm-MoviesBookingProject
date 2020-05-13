package Transaction;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class TicketController {

	@Autowired
	TicketService ticketService;

	@RequestMapping("/tickets")
	Iterable<Ticket> getAllTickets() {
		return ticketService.getAllTickets();
	}
	
	@RequestMapping("/tickets/last")
	Integer findAllTicket() {
		return ticketService.findAllTicket();
	}

	@RequestMapping(method = RequestMethod.POST, value = "/ticket/create")
	void createticket(@RequestBody Ticket history) {
		ticketService.createTicket(history);
	}

	@RequestMapping("/ticket/{id}")
	Optional<Ticket> getUserById(@PathVariable int id) {
		return ticketService.getTicketById(id);
	}
}
