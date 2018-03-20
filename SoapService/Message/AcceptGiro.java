package Message;
/**
 * Created by Chung on 09-Mar-18.
 */

        import java.util.Date;
        import java.util.logging.Logger;
        import javax.jws.WebMethod;
        import javax.jws.WebParam;
        import javax.jws.WebService;
        import javax.jws.soap.SOAPBinding;

@WebService
@SOAPBinding()
public class AcceptGiro {private static final Logger LOG = Logger.getLogger(AcceptGiro.class.getName());

    @WebMethod
    public long uniqueNumber (@WebParam(name ="name") String name, @WebParam(name="bedrag") float bedrag, @WebParam(name ="adres") String adress) throws InterruptedException{
        Date currentDate = new Date();
        long unix = currentDate.getTime() /1000;
        LOG.info("Naam: "+ name +" bedrag: "+ bedrag + "adress: "+ adress + "unique number: "+unix);
        Thread.sleep(30000);
        return unix;
    }
}

