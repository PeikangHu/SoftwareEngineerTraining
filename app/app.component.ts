import {Component, OnInit} from "@angular/core";
import {SIDEBAR_DIRECTIVES} from "./sidebar/sidebar";
import {CONTENT_DIRECTIVES} from "./content/content";
import {NAVBAR_DIRECTIVES} from "./navbar/navbar";
import {SHARED_PROVIDERS} from "./shared/shared";
/**
 * Created by peikanghu on 7/11/16.
 */

@Component({
	selector: 'phu-app',
	directives:[SIDEBAR_DIRECTIVES, CONTENT_DIRECTIVES, NAVBAR_DIRECTIVES],
	providers: [SHARED_PROVIDERS],
	styleUrls: ['app/app.component.css'],
	templateUrl: 'app/app.component.html'
})

export default class AppComponent implements OnInit
{
	isShownSidebar: boolean;

	ngOnInit(): void
	{
		this.isShownSidebar = true;
	}



	onIsShownSidebarValueChanged($event)
	{
		this.isShownSidebar = $event;
	}
}