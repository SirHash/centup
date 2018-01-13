// import React from 'react';
// import ListNews from '../components/listNews'
//
// export default props => (
//       <ListNews/>
// )

import React from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import axios from 'axios';

import ListNews from './../components/listNews'

const obj = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "http://placehold.it/600/92c952",
      "thumbnailUrl": "http://placehold.it/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "http://placehold.it/600/771796",
      "thumbnailUrl": "http://placehold.it/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "http://placehold.it/600/24f355",
      "thumbnailUrl": "http://placehold.it/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "http://placehold.it/600/d32776",
      "thumbnailUrl": "http://placehold.it/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "http://placehold.it/600/f66b97",
      "thumbnailUrl": "http://placehold.it/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "http://placehold.it/600/56a8c2",
      "thumbnailUrl": "http://placehold.it/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "http://placehold.it/600/b0f7cc",
      "thumbnailUrl": "http://placehold.it/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "http://placehold.it/600/54176f",
      "thumbnailUrl": "http://placehold.it/150/54176f"
    },
    {
      "albumId": 1,
      "id": 9,
      "title": "qui eius qui autem sed",
      "url": "http://placehold.it/600/51aa97",
      "thumbnailUrl": "http://placehold.it/150/51aa97"
    },
    {
      "albumId": 1,
      "id": 10,
      "title": "beatae et provident et ut vel",
      "url": "http://placehold.it/600/810b14",
      "thumbnailUrl": "http://placehold.it/150/810b14"
    },
    {
      "albumId": 1,
      "id": 11,
      "title": "nihil at amet non hic quia qui",
      "url": "http://placehold.it/600/1ee8a4",
      "thumbnailUrl": "http://placehold.it/150/1ee8a4"
    },
    {
      "albumId": 1,
      "id": 12,
      "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
      "url": "http://placehold.it/600/66b7d2",
      "thumbnailUrl": "http://placehold.it/150/66b7d2"
    },
    {
      "albumId": 1,
      "id": 13,
      "title": "repudiandae iusto deleniti rerum",
      "url": "http://placehold.it/600/197d29",
      "thumbnailUrl": "http://placehold.it/150/197d29"
    },
    {
      "albumId": 1,
      "id": 14,
      "title": "est necessitatibus architecto ut laborum",
      "url": "http://placehold.it/600/61a65",
      "thumbnailUrl": "http://placehold.it/150/61a65"
    },
    {
      "albumId": 1,
      "id": 15,
      "title": "harum dicta similique quis dolore earum ex qui",
      "url": "http://placehold.it/600/f9cee5",
      "thumbnailUrl": "http://placehold.it/150/f9cee5"
    },
    {
      "albumId": 1,
      "id": 16,
      "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
      "url": "http://placehold.it/600/fdf73e",
      "thumbnailUrl": "http://placehold.it/150/fdf73e"
    },
    {
      "albumId": 1,
      "id": 17,
      "title": "natus doloribus necessitatibus ipsa",
      "url": "http://placehold.it/600/9c184f",
      "thumbnailUrl": "http://placehold.it/150/9c184f"
    },
    {
      "albumId": 1,
      "id": 18,
      "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
      "url": "http://placehold.it/600/1fe46f",
      "thumbnailUrl": "http://placehold.it/150/1fe46f"
    },
    {
      "albumId": 1,
      "id": 19,
      "title": "perferendis nesciunt eveniet et optio a",
      "url": "http://placehold.it/600/56acb2",
      "thumbnailUrl": "http://placehold.it/150/56acb2"
    },
    {
      "albumId": 1,
      "id": 20,
      "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
      "url": "http://placehold.it/600/8985dc",
      "thumbnailUrl": "http://placehold.it/150/8985dc"
    },
    {
      "albumId": 1,
      "id": 21,
      "title": "ad et natus qui",
      "url": "http://placehold.it/600/5e12c6",
      "thumbnailUrl": "http://placehold.it/150/5e12c6"
    },
    {
      "albumId": 1,
      "id": 22,
      "title": "et ea illo et sit voluptas animi blanditiis porro",
      "url": "http://placehold.it/600/45601a",
      "thumbnailUrl": "http://placehold.it/150/45601a"
    },
    {
      "albumId": 1,
      "id": 23,
      "title": "harum velit vero totam",
      "url": "http://placehold.it/600/e924e6",
      "thumbnailUrl": "http://placehold.it/150/e924e6"
    },
    {
      "albumId": 1,
      "id": 24,
      "title": "beatae officiis ut aut",
      "url": "http://placehold.it/600/8f209a",
      "thumbnailUrl": "http://placehold.it/150/8f209a"
    },
    {
      "albumId": 1,
      "id": 25,
      "title": "facere non quis fuga fugit vitae",
      "url": "http://placehold.it/600/5e3a73",
      "thumbnailUrl": "http://placehold.it/150/5e3a73"
    },
    {
      "albumId": 1,
      "id": 26,
      "title": "asperiores nobis voluptate qui",
      "url": "http://placehold.it/600/474645",
      "thumbnailUrl": "http://placehold.it/150/474645"
    },
    {
      "albumId": 1,
      "id": 27,
      "title": "sit asperiores est quos quis nisi veniam error",
      "url": "http://placehold.it/600/c984bf",
      "thumbnailUrl": "http://placehold.it/150/c984bf"
    },
    {
      "albumId": 1,
      "id": 28,
      "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
      "url": "http://placehold.it/600/392537",
      "thumbnailUrl": "http://placehold.it/150/392537"
    },
    {
      "albumId": 1,
      "id": 29,
      "title": "aut ipsam quos ab placeat omnis",
      "url": "http://placehold.it/600/602b9e",
      "thumbnailUrl": "http://placehold.it/150/602b9e"
    },
    {
      "albumId": 1,
      "id": 30,
      "title": "odio enim voluptatem quidem aut nihil illum",
      "url": "http://placehold.it/600/372c93",
      "thumbnailUrl": "http://placehold.it/150/372c93"
    },
    {
      "albumId": 1,
      "id": 31,
      "title": "voluptate voluptates sequi",
      "url": "http://placehold.it/600/a7c272",
      "thumbnailUrl": "http://placehold.it/150/a7c272"
    },
    {
      "albumId": 1,
      "id": 32,
      "title": "ad enim dignissimos voluptatem similique",
      "url": "http://placehold.it/600/c70a4d",
      "thumbnailUrl": "http://placehold.it/150/c70a4d"
    },
    {
      "albumId": 1,
      "id": 33,
      "title": "culpa ipsam nobis qui fuga magni et mollitia",
      "url": "http://placehold.it/600/501fe1",
      "thumbnailUrl": "http://placehold.it/150/501fe1"
    },
    {
      "albumId": 1,
      "id": 34,
      "title": "vitae est facere quia itaque adipisci perferendis id maiores",
      "url": "http://placehold.it/600/35185e",
      "thumbnailUrl": "http://placehold.it/150/35185e"
    },
    {
      "albumId": 1,
      "id": 35,
      "title": "tenetur minus voluptatum et",
      "url": "http://placehold.it/600/c96cad",
      "thumbnailUrl": "http://placehold.it/150/c96cad"
    },
    {
      "albumId": 1,
      "id": 36,
      "title": "expedita rerum eaque",
      "url": "http://placehold.it/600/4d564d",
      "thumbnailUrl": "http://placehold.it/150/4d564d"
    },
    {
      "albumId": 1,
      "id": 37,
      "title": "totam voluptas iusto deserunt dolores",
      "url": "http://placehold.it/600/ea51da",
      "thumbnailUrl": "http://placehold.it/150/ea51da"
    },
    {
      "albumId": 1,
      "id": 38,
      "title": "natus magnam iure rerum pariatur molestias dolore nisi",
      "url": "http://placehold.it/600/4f5b8d",
      "thumbnailUrl": "http://placehold.it/150/4f5b8d"
    },
    {
      "albumId": 1,
      "id": 39,
      "title": "molestiae nam ullam et rerum doloribus",
      "url": "http://placehold.it/600/1e71a2",
      "thumbnailUrl": "http://placehold.it/150/1e71a2"
    },
    {
      "albumId": 1,
      "id": 40,
      "title": "est quas voluptates dignissimos sint praesentium nisi recusandae",
      "url": "http://placehold.it/600/3a0b95",
      "thumbnailUrl": "http://placehold.it/150/3a0b95"
    },
    {
      "albumId": 1,
      "id": 41,
      "title": "in voluptatem doloremque cum atque architecto deleniti",
      "url": "http://placehold.it/600/659403",
      "thumbnailUrl": "http://placehold.it/150/659403"
    },
    {
      "albumId": 1,
      "id": 42,
      "title": "voluptatibus a autem molestias voluptas architecto culpa",
      "url": "http://placehold.it/600/ca50ac",
      "thumbnailUrl": "http://placehold.it/150/ca50ac"
    },
    {
      "albumId": 1,
      "id": 43,
      "title": "eius hic autem ad beatae voluptas",
      "url": "http://placehold.it/600/6ad437",
      "thumbnailUrl": "http://placehold.it/150/6ad437"
    },
    {
      "albumId": 1,
      "id": 44,
      "title": "neque eum provident et inventore sed ipsam dignissimos quo",
      "url": "http://placehold.it/600/29fe9f",
      "thumbnailUrl": "http://placehold.it/150/29fe9f"
    },
    {
      "albumId": 1,
      "id": 45,
      "title": "praesentium fugit quis aut voluptatum commodi dolore corrupti",
      "url": "http://placehold.it/600/c4084a",
      "thumbnailUrl": "http://placehold.it/150/c4084a"
    },
    {
      "albumId": 1,
      "id": 46,
      "title": "quidem maiores in quia fugit dolore explicabo occaecati",
      "url": "http://placehold.it/600/e9b68",
      "thumbnailUrl": "http://placehold.it/150/e9b68"
    },
    {
      "albumId": 1,
      "id": 48,
      "title": "ut esse id",
      "url": "http://placehold.it/600/68e0a8",
      "thumbnailUrl": "http://placehold.it/150/68e0a8"
    },
    {
      "albumId": 1,
      "id": 49,
      "title": "quasi quae est modi quis quam in impedit",
      "url": "http://placehold.it/600/2cd88b",
      "thumbnailUrl": "http://placehold.it/150/2cd88b"
    },
    {
      "albumId": 1,
      "id": 50,
      "title": "et inventore quae ut tempore eius voluptatum",
      "url": "http://placehold.it/600/9e59da",
      "thumbnailUrl": "http://placehold.it/150/9e59da"
    },
];

export default class ListNewsSreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: [],
    };

  }

  componentWillMount() {
     axios.get('https://jsonplaceholder.typicode.com/photos')
       .then( response => { this.setState({ data: response.data }); })
       .catch( () => { console.log('Erro ao recuperar dados'); })
  }

    //Funciona legal, mais carrega todo o obj
    render() {
        return(
          <ScrollView>
            {
              obj.map( data => (<ListNews data ={ data } key={ data.id }></ListNews>))
            }
          </ScrollView>
        )
      }

    //Trava devido a quantidade de dados
    // render() {
    //     return(
    //
    //       <ScrollView >
    //         {
    //           this.state.listNews.map( data => (<ListNews data={ data } key={ data.id }></ListNews>))
    //         }
    //       </ScrollView>
    //     )
    //   }
}
