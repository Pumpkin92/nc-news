import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <section className="loading-section">
      <h2>
        Loading...
        <div>
          <FontAwesomeIcon icon={faSpinner} className="fa-spin-pulse fa-spin" />
        </div>
      </h2>
    </section>
  );
}
