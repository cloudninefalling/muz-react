import { HashLink } from "react-router-hash-link";
import LeadSpanDynamic from "./LeadSpanDynamic";

export default function Lead() {
  return (
    <section className="lead">
      <h1 className="lead__title">
        explore &amp;&nbsp;find your {<LeadSpanDynamic />}
      </h1>

      <p className="lead__subtitle">make some noise</p>
      <HashLink to="/#bestsellers" smooth={true} className="lead__button">
        <div className="lead__explore"></div>
        <div className="lead__arrow"></div>
      </HashLink>
    </section>
  );
}
