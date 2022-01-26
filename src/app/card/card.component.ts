import {Component, Input, OnInit} from '@angular/core'
import { Card } from '../app.component'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    // interpolation: ['{{', '}}']
})
export class CardComponent implements OnInit {

    @Input() card!: Card
    @Input() index!: number

    title = 'My Card Title'
    text = 'My simple text by Angular'

    cardDate: Date = new Date()

    textColor = 'black'

    ngOnInit(): void {}

    changeTitle() {
        this.card.title = 'Title has been chaged'
    }
    
    inputHandler(value: any) {
        // const value = event.target.value
        this.title = value
    }

    changeHandler() {
        console.log(this.title)
    }
}