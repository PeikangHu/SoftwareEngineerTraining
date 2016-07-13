import {Component, OnInit} from "@angular/core";
import {CollapseDirective, DROPDOWN_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
/**
 * Created by peikanghu on 7/11/16.
 */
@Component({
	selector: 'phu-navbar',
	directives: [CollapseDirective, DROPDOWN_DIRECTIVES],
	styleUrls: ['app/navbar/navbar.component.css'],
	templateUrl: 'app/navbar/navbar.component.html'
})

export default class NavbarComponent implements OnInit
{
	isNavCollapsed: boolean = true;

	ngOnInit(): void
	{

	}

	showMenuToggled(event)
	{
		this.isNavCollapsed = !this.isNavCollapsed;
	}
}