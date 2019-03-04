var fs = require('fs');
var expect = require('chai').expect;
var should = require('chai').should();

import { statement, htmlStatement } from '../statement.js';

describe('Statement', function() {
  it('prints bill', function() {
    var inv_json = JSON.parse(fs.readFileSync('./invoices.json', 'utf8'));
    var plays_json = JSON.parse(fs.readFileSync('./plays.json', 'utf8'));

    var bill = statement(inv_json[0], plays_json);
    expect(bill).equal("Statement for BigCo\n\
 Hamlet: $650.00 (55 seats)\n\
 As You Like It: $580.00 (35 seats)\n\
 Othello: $500.00 (40 seats)\n\
Amount owed is $1,730.00\n\
You earned 47 credits\n");
  });

  it('prints html bill', function() {
    var inv_json = JSON.parse(fs.readFileSync('./invoices.json', 'utf8'));
    var plays_json = JSON.parse(fs.readFileSync('./plays.json', 'utf8'));
    var htmlBill = htmlStatement(inv_json[0], plays_json);
    expect(htmlBill).equal(`<h1>Statement for BigCo</h1>
<table>
<tr><th>play</th><th>seats</th><th>cost</th></tr>
<tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>

<tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>

<tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
</table>
<p>Amount owed is
<em>$1,730.00</em></p>
<p>You earned <em>47</em>
credits</p>
`)
  })
});
