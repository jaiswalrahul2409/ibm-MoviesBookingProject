package Transaction;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;




@Repository
public interface TicketRepositoryImpl extends CrudRepository<Ticket, Integer>{

}
