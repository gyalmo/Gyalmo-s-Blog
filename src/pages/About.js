import * as React from "react";
import { Link } from 'gatsby'
const about = () => {
  return <main>
    <><h1>Gyalmo's Blog!</h1>
  <h2>This is the about page</h2>
  <p>Whether you’re a newbie or an expert in a community, when I say community I mean you can be a part of the community or leading it. Have a think who might be excluded in accessing your community activities in their current form? and why this might be. Let’s say some examples might include: people with jobs, people with caring responsibilities such as a child or another family member, wheelchair users, women and non-binary people, mature students. This is far from a complete list, but enough to get you started.
  Now when you’ve finally figured out the ones who may feel left out of the community it’s time to handle the negative scenarios.
  </p></>
  <Link to="/index">
  home </Link>
  </main>};
export default about;