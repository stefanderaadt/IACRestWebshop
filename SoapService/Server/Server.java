package Server;

/**
 * Created by Chung on 09-Mar-18.
 */

        import java.util.logging.Logger;
        import javax.xml.ws.Endpoint;

        import Message.AcceptGiro;

public final class Server {
    private static final Logger LOG = Logger.getLogger(Server.class.getName());
    private static final String HOST_NAME = "localhost";
    private static final String PORT_NO = "9999";
    private static final String HELLO_SVC_NAME = "java-ws/acceptgiro";
    private static final String PROTOCOL = "http";
    private static final String URL = String.format("%s://%s:%s/%s", PROTOCOL, HOST_NAME, PORT_NO, HELLO_SVC_NAME);

    public static void main(String[] args) {
        AcceptGiro acceptGiro = new AcceptGiro();
        Endpoint.publish(URL, acceptGiro);
        LOG.info("SoapService service started successfully ...");
    }
}
