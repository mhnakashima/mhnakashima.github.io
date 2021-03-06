import { Component, OnInit } from '@angular/core';

import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
 
import { library } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  constructor() { 
    library.add(
      faTwitter, faInstagram, faFacebook, faLinkedin, faGithub
    )
  }

  ngOnInit() {
  }

}
