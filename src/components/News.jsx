import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    articles = [
    {
      "source": {
        "id": "news24",
        "name": "News24"
      },
      "author": "Compiled by Herman Mostert",
      "title": "Cricket SA board grants extension on submission of Ombudsman's SJN report",
      "description": "Cricket South Africa's board on Wednesday granted the Social Justice and Nation-building Ombudsman an extension on the final submission of the report.",
      "url": "https://www.news24.com/sport/Cricket/Proteas/cricket-sa-board-grants-extension-on-submission-of-ombudsmans-sjn-report-20211201",
      "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/849/78cfd135e31e4cb0be1cb4c581610b7c.jpg",
      "publishedAt": "2021-12-01T11:04:04+00:00",
      "content": "Cricket South Africa's board on Wednesday granted the Social Justice and Nation-building (SJN) Ombudsman an extension on the final submission of the report.\r\nThe initial deadline for the submission o… [+1175 chars]"
    },
    {
      "source": {
        "id": "news24",
        "name": "News24"
      },
      "author": "Khanyiso Tshwaku",
      "title": "Cricket SA's acting chief executive says SJN report will be made public",
      "description": "Cricket South Africa's acting chief executive officer Pholetsi Moseki said the contents of the Cricket for Social Justice and Nation-building report will be made public.",
      "url": "https://www.news24.com/sport/Cricket/Proteas/cricket-sas-acting-chief-executive-says-sjn-report-will-be-made-public-20211201",
      "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/1212/ac70762e750c4ba2b628cc74e3a57e48.jpg",
      "publishedAt": "2021-12-01T06:41:13+00:00",
      "content": "<ul><li>Cricket South Africa's acting chief executive officer Pholetsi Moseki says the Cricket for Social Justice and Nation-building report will be made public.</li><li>The deadline for the submissi… [+1572 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
        constructor() {
            super();
            this.state = {
                articles: this.articles,
                loading :false,

            }
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey- Top Headlines</h2>
                <div className="row mt-4">
                    {this.state.articles.map((element) => {
                        return (
                               <div className="col-4" key={element.url}>
                                <NewsItems title={element.title} description={element.title} imageUrl={element.urlToImage} newsUrl={element.url }/>
                                </div>
                        )
                })}

                </div>
            </div>
        )
    }
}
