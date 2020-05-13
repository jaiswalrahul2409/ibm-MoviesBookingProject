package Transaction;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class TicketDao {
	
	@Autowired
	JdbcTemplate template;
	
	Integer findAllTicket() {
		
		return template.queryForObject("SELECT ticket_id FROM ticket ORDER BY ticket_id DESC LIMIT 1", Integer.class);
	
	
	}

}
