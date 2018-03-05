import React, { Component } from 'react';
import './css/aside.css';
import grace_hopper from './assets/images/grace-hopper.jpg';
import usa from './assets/images/USA.png'
import navy from './assets/images/navy.png'
import merit from './assets/images/merit.png'
import medal from './assets/images/medal.png'

class Aside extends Component {
  render() {
    return (
      <aside className="summary">
      <table className="summary-table">
        <thead>
          <tr>
            <th colSpan={2}>Grace Murray Hopper</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>
              <img src={grace_hopper} alt="Grace Hopper"></img>
              <p>Rear Admiral Grace M. Hopper, 1984</p>
              <hr></hr>
            </td>
          </tr>
          <tr>
            <th>Nickname(s)</th>
            <td>"Amazing Grace"</td>
          </tr>
          <tr>
            <th>Born</th>
            <td>December 9, 1906 <br></br>
            New York City, New York, U.S.</td>
          </tr>
          <tr>
            <th>Died</th>
            <td>January 1, 1992 (aged 85) <br></br>
            <a href="https://en.wikipedia.org/wiki/Arlington,_Virginia" target="_blank">Arlington, Virginia</a>, U.S.</td>
          </tr>
          <tr>
            <th>Place of burial</th>
            <td><a href="https://en.wikipedia.org/wiki/Arlington_National_Cemetery" target="_blank">Arlington National Cemetery</a></td>
          </tr>
          <tr>
            <th>Allegiance</th>
            <td> <img src={usa} alt="EEUU"></img></td>
          </tr>
          <tr>
            <th>Service/branch</th>
            <td> <img src={navy} alt="United States Navy"></img></td>
          </tr>
          <tr>
            <th>Years of service</th>
            <td>1943–1966, 1967–1971, 1972–1986</td>
          </tr>
          <tr>
            <th>Rank</th>
            <td> <img src={medal} alt="Real Admiral"></img><a href="https://en.wikipedia.org/wiki/Rear_admiral_(United_States)" target="_blank">Rear admiral (lower half)</a> </td>
          </tr>
          <tr>
            <th>Awards</th>
            <td> <img src={usa}></img><a href="Defense Distinguished Service Medal" target="_blank">Defense Distinguished Service Medal</a></td>
          </tr>
          <tr>
            <th></th>
            <td colSpan={2}><img src={merit}></img><a href="https://en.wikipedia.org/wiki/Legion_of_Merit" target="_blank">Legion of Merit</a></td>
          </tr>
          <tr>
            <th></th>
            <td colSpan={2}><img src={medal}></img><a href="https://en.wikipedia.org/wiki/American_Campaign_Medal" target="_blank">American Campaign Medal</a></td>
          </tr>
          <tr>
            <th></th>
            <td colSpan={2}><img src={usa}></img><a href="https://en.wikipedia.org/wiki/World_War_II_Victory_Medal" target="_blank">World War II Victory Medal</a></td>
          </tr>
          <tr>
            <th></th>
            <td colSpan={2}><img src={navy}></img><a href="https://en.wikipedia.org/wiki/World_War_II_Victory_Medal" target="_blank">National Defense Service</a></td>
          </tr>
        </tbody>
      </table>
    </aside>
    );
  }
}

export default Aside;