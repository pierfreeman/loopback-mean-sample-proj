import {OnInit, Component} from "@angular/core";
import {Router} from "@angular/router";

import {Hero} from "../../models/hero";
import {HeroSearchService} from "../../services/hero-search.service";

import {Observable, Subject} from "rxjs";

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    //moduleId: module.id,
    selector: 'hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: [ './hero-search.component.css' ],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
            ? this.heroSearchService.search(term)
            : Observable.of<Hero[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero._id];
        this.router.navigate(link);
    }
}
