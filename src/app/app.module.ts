import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './information/home/home.component';
import { AboutComponent } from './information/about/about.component';
import { ShopComponent } from './information/shop/shop.component';
import { ContactComponent } from './information/contact/contact.component';
import { TermsComponent } from './information/terms/terms.component';
import { PrivacyPoliciesComponent } from './Politics/privacy-policies/privacy-policies.component';
import { ShippingPoliciesComponent } from './Politics/shipping-policies/shipping-policies.component';
import { RefundPolicyComponent } from './Politics/refund-policy/refund-policy.component';
import { TrackYourOrderComponent } from './Politics/track-your-order/track-your-order.component';
import { PaymentAgainstDeliveryComponent } from './Politics/payment-against-delivery/payment-against-delivery.component';
import { HouseComponent } from './categories/house/house.component';
import { TechnologyComponent } from './categories/technology/technology.component';
import { PetsComponent } from './categories/pets/pets.component';
import { BeautyComponent } from './categories/beauty/beauty.component';
import { FitnessComponent } from './categories/fitness/fitness.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    ContactComponent,
    TermsComponent,
    PrivacyPoliciesComponent,
    ShippingPoliciesComponent,
    RefundPolicyComponent,
    TrackYourOrderComponent,
    PaymentAgainstDeliveryComponent,
    HouseComponent,
    TechnologyComponent,
    PetsComponent,
    BeautyComponent,
    FitnessComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
