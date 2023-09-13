import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nihilent-angular-movie-app';
  // name="charan reddy"

  charan={
    name:'charan',
    src:"https://www.hindustantimes.com/ht-img/img/2023/09/09/550x309/CRICKET-ASIA-CUP-SRI-BAN-ODI-12_1694284366814_1694284440268.jpg"
  }
  vamsi={
    name:'vamsi',
    src:"https://www.hindustantimes.com/ht-img/img/2023/09/09/550x309/CRICKET-ASIA-CUP-SRI-BAN-ODI-12_1694284366814_1694284440268.jpg"
  }
  sudeesh={
    name:'sudeesh',
    src:"https://www.hindustantimes.com/ht-img/img/2023/09/09/550x309/CRICKET-ASIA-CUP-SRI-BAN-ODI-12_1694284366814_1694284440268.jpg"
  }

  
  profiles =[{
    name:'charan',
    src:"https://www.hindustantimes.com/ht-img/img/2023/09/09/550x309/CRICKET-ASIA-CUP-SRI-BAN-ODI-12_1694284366814_1694284440268.jpg"
  },{ name:'vamsi',
  src:"https://images.ctfassets.net/hrltx12pl8hq/1FgcKBpZX1Lj2TzrIDkcte/4c12187b30916159e9040d9aee15f71b/thumb_oct22_02.jpg?fit=fill&w=820&h=461&fm=webp"},
{name:'sudeesh',
src:"https://www.hindustantimes.com/ht-img/img/2023/09/09/550x309/CRICKET-ASIA-CUP-SRI-BAN-ODI-12_1694284366814_1694284440268.jpg"
}]

movies=[{  src:"https://pbs.twimg.com/media/F3B4q0baEAgPLGj?format=jpg&name=large",
moviename:"Guntur Kaaram",
rating:"9.1",
content:"Guntur Kaaram is an upcoming Indian Telugu-language action drama film written and directed by Trivikram Srinivas, and produced by S. Radha Krishna under Haarika & Hassine Creations. It stars Mahesh Babu, Sreeleela, Meenakshi Chaudhary, Jagapathi Babu and Ramya Krishna"},
{src:"https://telugustop.com/wp-content/uploads/2023/06/Jr-NTR-Devara.jpeg",
moviename:"Devara",
rating:"9.1",
content:"Devara is an upcoming Indian action-drama written and directed by Koratala Siva. Produced by Sudhakar Mikkilineni and Kosaraju Harikrishna under the banners Yuvasudha Arts and N. T. R. Arts, the film stars N. T. Rama Rao Jr. and Janhvi Kapoor in the lead roles with Saif Ali Khan as the main antagonist."},
{src:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/2/2022_2$largeimg_750308347.jpg",
moviename:"Bheemla Nayak",
rating:"9.1",
content:"A battle begins between SI Bheemla Nayak, a righteous policeman, and Daniel Shekhar, an-ex havildar, when Daniel tricks Bheemla into surrendering to corruption."},
{
  src:"https://www.koimoi.com/wp-content/new-galleries/2022/05/netizens-call-mahesh-babu-starrer-sarkaru-vaari-paata-a-blockbuster-0001.jpg",
  moviename:"Sarkaru vaari paata",
  rating:"9.1",
  content:"Upon loaning a huge sum to his fraudulent lover in Miami, Mahi is forced to retrieve the amount from her father, who is a politician in Vizag. However, Mahi's visit unravels a giant banking scandal.",
}]
}
