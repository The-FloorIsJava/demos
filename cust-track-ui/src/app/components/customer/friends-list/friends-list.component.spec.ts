import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { defer } from 'rxjs';
import { CustomerService } from 'src/app/services/customer.service';

import { FriendsListComponent } from './friends-list.component';

describe('FriendsListComponent', () => {
  let component: FriendsListComponent;
  let fixture: ComponentFixture<FriendsListComponent>;
  // added a spy as a variable in our test suite
  let serviceSpy: jasmine.SpyObj<CustomerService>

  beforeEach(async () => {

    // create our spy object and creat the mock implemnations of what we expect fromt he findAllFriends
    serviceSpy = jasmine.createSpyObj('CustomerService', ['findAllFriends'])

    // make a helper function to go ahead and handle this asyncData we are mocking
    function asyncData<T>(data: T){
      return defer(() => Promise.resolve(data))
    }

    // Mock the Observable Return so our .subscribe() function still works and returns the mocked Information expect from the findAllFriends
    serviceSpy.findAllFriends.and.returnValue(asyncData([{customerName: 'sanchit'}, {customerName: 'nuru'}]))

    await TestBed.configureTestingModule({
      declarations: [ FriendsListComponent ],
      imports: [HttpClientTestingModule], // provide HttpClientTestingModule instead of just HttpClientModule as it's less encumbersome on the app
      providers: [{provide:CustomerService, useValue: serviceSpy}] // mention that when CustomerService is provided we're using the value of the serviceSpy Object

    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * We waitForAsync calls (e.g. findFriends()) once the component is stable (meaning all async functions
   * have been fulfilled). Meaning our state for the customers array has been updated with the mock information
   * so the length should now be greater than 0
   */
  it('should have a list of friends now', waitForAsync(() => {
    expect(component.customers.length).toEqual(0)
    component.findFriends();
    fixture.whenStable().then(() => { // watiing for the fixtu
      console.log(component.customers)
      expect(component.customers.length).toBeGreaterThan(0)
    }
    )
  }))

});
