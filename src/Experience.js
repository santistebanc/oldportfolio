import React from 'react';

import { Table, Container, Label } from 'semantic-ui-react';


const en = {
  now: 'Now',
  studies: <span className="black">Bachelor's Degree in <i>Informatics Engineering</i> at <strong className="blue">Tecnológico de Monterrey</strong> in SLP, Mexico.<p className="jobdesc">Object Oriented Programming, Software Architecture, Data Structures, Databases, Networks, Servers, Operating Systems, IT Security, Cloud Computing</p></span>,
  mls: <span className="black">Internship at software development start-up company <strong className="blue">Market Logic Software</strong> in Berlin<p className="jobdesc">Development of UI Components in <i>React.js</i> including graphs and charts with <i>D3.js</i> and dynamic widgets.</p></span>,
  furtwangen: <span className="black">Exchange Semester in Germany at the  University <strong className="blue">Hochschule Furtwangen</strong> with DAAD scholarship</span>,
  aisa: <span className="black">Internship at <strong className="blue">AISA</strong>, Development of management system for government agency of public property registry <i>(Registro Público de la Propiedad)</i><p className="jobdesc">Was in charge of designing and programming the UI Forms and Controls using <i>Windows Presentation Foundation</i> framework in C# and a large SQL database.</p></span>
}

const Experience = ({now, studies, mls, furtwangen, aisa}) => (
      <Container className="educontainer">
        <Table compact>
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Label ribbon>2017</Label>
              </Table.Cell>
              <Table.Cell>{studies}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><Label ribbon>2016</Label></Table.Cell>
              <Table.Cell>{mls}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><Label ribbon>2015</Label></Table.Cell>
              <Table.Cell>{furtwangen}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell><Label ribbon>2015</Label></Table.Cell>
              <Table.Cell>{aisa}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    )


const content = {en};

export default ({lang}) => <Experience {...content[lang]}/>
