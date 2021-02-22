<template>
  <v-container>
    <v-layout row wrap fill-height>
      <v-flex
        xs12
        sm6
        md6
        lg4
        v-for="(title, index) in titles"
        :key="index"
        class="pa-1 helvetica"
        >
        <v-flex
            class="mt-1 custom-button pointer hidden-sm-and-up"
            style="background-color: white;"
            @click="getIndex(index)"> <!-- for mobile view -->
            <small class="button-text default-font"> <!-- goTo(title.route) -->
              {{ title.title }}
            </small>
            <v-slide-y-transition>
              <v-card flat class="mt-2 hidden-sm-and-up" v-if="isClicked === index" style="border-radius: 0px 0px 15px 15px;">
                <v-card-text v-if="index === 0" class="text-xs-left">
                  <p>
                    We welcome quality service providers to apply. Apply by clicking the
                    “Become a Supplier” button via the menu.
                  </p>
                </v-card-text>
                <v-card-text v-if="index === 1" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                <li>
                    Select your service type
                </li>
                <li>
                    Follow the 3 step process to set location &gt; tasks &gt; schedule
                    &amp; frequency
                </li>
                <li>
                    View profiles and pricing of available service providers
                </li>
                <li>
                    Choose your favourite service providers and click “ASK” to see who
                    is available for your specific requirement
                </li>
                <li>
                    When they say “YES” Confirm your ultimate service provider for the
                    requirement
                </li>
                <li>
                    Communicate freely with your service provider, inside the app,
                    which translates to SMS for ease of use so you don't need to go
                    into the app to see any responses or re-engage a conversation.
                </li>
                <li>
                    Book as many jobs as you like! So for example feel free to create a
                    booking for a weekly clean and create another separate job for a
                    task you only need done monthly. Then just invite the same service
                    provider to bid on it.
                </li>
              </ul>
              </v-card-text>
              <v-card-text v-if="index === 2" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        Users can cancel anytime. Menu &gt; Job &gt; Cancel independently
                        by visit, or cancel all future visits. No fuss.
                    </li>
                    <li>
                        If cancelling “same day” just be aware that you will not be
                            refunded.
                    </li>
                    <li>
                        It is important that you are on site when a new service provider
                            commences so that you can approve their work ethic. If
                            dissatisfied, cancel immediately and request a refund. Avoid
                            waiting until they finish their work and then requesting a refund.
                    </li>
                    <li>
                        If you just want to change something about a job go to Menu &gt;
                            the Job/Edit… edit your job and invite the same service provider.
                            You can discuss this with them beforehand or if you really just
                            need the change just make the edit, if your existing provider
                            cannot do it, you can easily engage with another preferred service
                            provider.
                    </li>
                    <li>
                        If you want to change your service provider go to Menu &gt; Job
                            &gt; Suppliers &gt; ASK another service provider and once
                            confirmed, your previous service provider will be notified of the
                            cancellation.
                    </li>
                    <li>
                        If your service provider cancels just go to Menu &gt; the Job &gt;
                            Suppliers &gt; choose another, “ASK” and then when they say “YES”,
                            click “CONFIRM”. Same day cancellations by a service provider will
                            automatically be logged as a 1 Star visit.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 3" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                    Commercial customers should ensure they are not providing all or
                            substantially all the plant &amp; equipment, or tools of trade
                            needed for the work to be performed; so not engaging as labour only
                            agreements unless the service provider can evidence a Labour Hire
                            License, which is relatively unlikely.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 4" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        Communication should be managed utilising the messaging service in-app
                    which ties in with normal SMS functionality so it is really convenient and
                    allows any issue to be properly reviewed by the Users and/or Matenance as
                    required.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 5" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        There isn’t one. If you don’t love the service you can cancel and
                            move on or change service provider.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 6" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        When you book a job, profiles &amp; pricing estimates will display
                            which are based on the hourly rates of the service providers
                            multiplied by your hours requirement for the job.
                    </li>
                    <li>
                        Once you choose your preferred service provider or multiple service
                            providers if unsure, you can simply “ASK” who of these options are
                            available. When they respond “YES”, their price estimate may be
                            adjusted to accommodate for your specific requirements, so you may
                            notice the price has increased or decreased. This can be due to
                            materials required, distance, convenience or labour factors which
                            don't fit their standard expectation for an hourly rate.
                            Ultimately, they are bidding for the job so you should receive
                            their best price; then you can “CONFIRM” if you like.
                    </li>
                    <li>
                        What’s the point of the estimate if the suppliers can change it
                            when they bid? This is designed to guide the suppliers on the
                            target rate and also so that you can more easily assess your
                            preferred suppliers before asking them if they are available.
                    </li>
                    <li>
                        Your card will be debited on the morning of the service and funds
                            held for 3 days to ensure complete service satisfaction before
                            being processed into the service provider’s account.
                    </li>
                    <li>
                        The service provider cannot adjust their price on your job after it
                            is confirmed. They cannot edit your job at all. If a price
                            adjustment is required they will need to discuss it with you,
                            cancel the job and then you may reinvite them to the job where they
                            will have the opportunity to bid again.
                    </li>
                    <li>
                        Do not ever accept an engagement with a service provider to
                            circumvent payments in the app regardless of circumstances or
                            locations. Doing this puts both parties in breach of their
                            contractual obligations of use, and opens up financial, safety,
                            compliance and security risks as well as significant costs to
                            Matenance. Clicking “CONFIRM” initiates a business relationship
                            owned by Matenance and the service provider is GEO-tracked by
                            Matenance. Contact us if you have any queries and read the
                            T&amp;C’s clauses surrounding Circumvention for more information.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 7" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        All service provider profiles display a proclamation of
                            documentation, insurances and certifications or skillsets that they
                            hold.
                    </li>
                    <li>
                        The customer is responsible for checking all documentation posed by
                            the service providers to ensure it is correct, current and suitable
                            for their own individual requirements.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 8" class="text-xs-left">
                <ul> class="my-custom-bullets-green-medium"
                    <li>
                        If you are not 100% satisfied, simply message the service provider to request a fix.
                    </li>
                    <li>
                        If you reasonably avail an opportunity for the service provider to fix a service and the service provider cannot or will not fix the issue simply ask them to refund whatever the fair portion of cost would be to have it fixed. The Service Provider is able to action this request for you assuming they agree. If a refund is actioned it is processed immediately including a credit note issued to your email address and will appear back on your debit card as soon as your bank processes it.
                    </li>
                    <li>
                        If unsatisfied still or it’s not resolving quickly, just contact us so we can be sure to assist in mediation before the 2-3 day holding period expires. We can’t take sides with Users but we may be able to help find middle ground.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 9" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        There is no minimum number of hours you should book. Simply enter
                            your requirement and the pricing will adjust accordingly prior to
                            the preferred suppliers having an opportunity to review it and
                            confirm the bid.
                    </li>
                    <li>
                        If you need support creating an estimate - for most services,
                            underneath the hours button in the schedule tab (booking - step 3),
                            there is an option for a system estimate which may assist you in
                            getting closer to the required estimate of hours. It’s usually best
                            though to gather your own estimate and go from there. If you are
                            unsure just do your best and aim to schedule a meeting with the
                            service provider before the day of commencement to discuss it.
                    </li>
                    <li>
                        The hours inputted into the specification will form part of the
                            requirement of the agreement unless the tasks are completed to a
                            high standard in less time. If the team finishes faster, consider
                            lowering the hours requirement on future visits and capturing new
                            bids.
                    </li>
                    <li>
                        If you enter “2 hours” this is in respect to total labour required.
                            So if the team has 2 people they will only stay for a maximum of 1
                            hour each.
                    </li>
                    <li>
                        If the service provider requires more time on a job they will
                            request an edit from you. If you do not action the edit accordingly
                            then the tasks should be considered a priority list only as they
                            may not have enough time to complete it.
                    </li>
                    <li>
                        If the service provider requires more time on a visit occurring
                            that same day, they need to request it prior to physically
                            commencing the job. In order to action this (because the visit is
                            already paid) the customer should create a new job to make up the
                            difference and invite the service provider and then confirm it.
                            Alternatively the customer can, in this circumstance, cancel the
                            job and request a full refund or accept that the job tasks will be
                            treated as a priority list and the hours will become the
                            requirement to be completed.
                    </li>
                    <li>
                        The web/app never closes and our service providers operate at
                            varying hours around the clock. Any requests or messaging will be
                            blocked after 10pm and reconvene automatically at 6am, daily. Any
                            pending messages from the night before will be sent at or around
                            6am.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 10" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        The parties will receive an invoice/receipt in line with tax law
                            and for each visit by email and a monthly statement issued on the
                            1st of each month.
                    </li>
                    <li>
                        You can also click Menu &gt; the Job &gt; Visits, to see a history
                            or future perspective of the visits for that job.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 11" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        The service providers are equipped with the general materials to
                            adequately complete the service type. If you have any special
                            requests be sure to add them into the task field (Booking - Step
                            2).
                    </li>
                    <li>
                        If you have any materials that you would like to provide yourself,
                            mention the specifics in the task field as well as the location of
                            the materials on site.
                    </li>
                    <li>
                        Most of the service providers will have eco friendly options, which
                            you can identify as such on their profile.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 12" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        Be sure to mention any pets in your task notes so you can be sure
                            to match with service providers that are happy to take on any such
                            responsibility and with consideration to any fears or allergies,
                            which are actually quite common.
                    </li>
                    <li>
                        We recommend securing dogs with a lead for the duration of the
                            service to prevent a most unfortunate circumstance of it escaping
                            or causing disruption to the service.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 13" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        The service providers will aim to be on time every time, however a
                            30-minute allowance is necessary to avoid unnecessary frustration
                            should this occur. Late arrivals can happen on occasion due to
                            irregular traffic congestion or previous jobs taking a little
                            longer to complete.
                    </li>
                    <li>
                        If you require an accurate start time its best to add this in your
                            task notes and consider providing a key for access to your service
                            provider.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 14" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        In the tasks page when booking, you can leave private notes
                            regarding the access to your property. These notes will only
                            display to the service provider that you “CONFIRM” after you have
                            “ASKED” who is available.
                    </li>
                </ul>
                <ul>
                    <li>
                        It is recommended to provide key access as this helps the service
                            providers with flexibility in their day. Flexibility allows the
                            service providers to accept more work. A lockbox is a great idea,
                            which is a small key-safe you can attach to the outside of your
                            property somewhere discreet, and access by pin code which means the
                            keys never need to leave your site or be loosely hidden; these are
                            available from any hardware store.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 15" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        The Customer optionally places ratings/reviews on a service
                            provider in relation to the expectation of quality on that service
                            type booked and on each visit independently so that we are getting
                            a true history of service quality. Each rating below 5 stars will
                            negatively impact the service providers “Visits with Complaints”
                            percentage exactly and accordingly, which may be displayed within
                            the platform as either this percentage of “Visits with Complaints”
                            or the equivalent star rating. We recommend adding a rating to the
                            visit if dissatisfied and noting the reason for the issue.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 16" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        Once approved by application the service providers are engaged in a
                            face-to-face meeting and a trial clean. If they pass these stages
                            &amp; receive a 5 star rating by one of our trusted
                            representatives, they are engaged onto the platform.
                    </li>
                    <li>
                        Teams that fall below a 4.5 star rating are no longer made
                            available to the search results and may be given an opportunity to
                            recover their performance with existing customers; so as not to
                            inconvenience a customer by cancelling their preferred service
                            provider unnecessarily.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 17" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        Entirely up to you however we recommend meeting any new team on
                            site and simply reviewing the general performance as they commence.
                    </li>
                    <li>
                        The team you select may or may not have a supervisor in place. If
                            they do they may mention this in their intro blurb.
                    </li>
                    <li>
                        If you are a commercial venue requiring a monthly supervision
                            inspection for the purposes of check-listing and/or reporting for
                            example you can easily book this as a separate job within the app
                            either with the same or an alternate service provider but
                            typically, the ratings in the app are the powerful persuader of the
                            quality control.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 18" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        The tasks can be edited using the template provided on the tasks
                            page (Step 2) or there is an option to write your own.
                    </li>
                    <li>
                        If you just want the service provider to do what is needed in the
                            time allocated just write that and they will do their best.
                    </li>
                    <li>
                        If there is a task you aren’t sure about, just “ASK” the Service
                            Providers by attempting the booking. So long as you feel they have
                            the materials for the task and are insured in the category.
                            Something like ironing, or skimming the pool leaves, perfectly ok.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 19" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        The people displayed in the profile photo are the people that are
                            authorised on your site once confirmed by you. You choose who comes
                            onto your site. If you find an unauthorised team member on your
                            site, let us know.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 20" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        The Matenance system works fast and is designed to accommodate any
                            urgent requirements. Of course, this is subject to availability.
                    </li>
                </ul>
              </v-card-text>
              <v-card-text v-if="index === 21" class="text-xs-left">
                <ul class="my-custom-bullets-green-medium">
                    <li>
                        By putting you in touch directly with the service providers around
                            you we are helping to ensure you get the very best pricing possible
                            for the level of cleaning quality that we know the Customer
                            desires.
                    </li>
                </ul>
              </v-card-text>
              </v-card>
            </v-slide-y-transition>
          </v-flex>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Global from '~/plugins/mixins/global'
  export default {
    data: () => ({
      titles: [
        {
          title: 'Become A Service Provider'
        },
        {
          title: 'Bookings'
        },
        {
          title: 'Cancellations/Changes'
        },
        {
          title: 'Commercial Customer Compliance'
        },
        {
          title: 'Communication'
        },
        {
          title: 'Contract Term'
        },
        {
          title: 'Costs/Payments'
        },
        {
          title: 'Documentation/Insurances'
        },
        {
          title: 'Guarantee'
        },
        {
          title: 'Hours'
        },
        {
          title: 'Invoices'
        },
        {
          title: 'Materials'
        },
        {
          title: 'Pets'
        },
        {
          title: 'Punctuality'
        },
        {
          title: 'Property Access'
        },
        {
          title: 'Ratings & Reviews'
        },
        {
          title: 'Screening'
        },
        {
          title: 'Supervision'
        },
        {
          title: 'Tasks'
        },
        {
          title: 'Team Members'
        },
        {
          title: 'Urgent Bookings'
        },
        {
          title: 'Value'
        }
      ],
      isClicked: null,
    }),
    mixins: [Global],
    methods: {
      getIndex (index) {
        if (this.isClicked === index) {
          this.isClicked = null
        } else {
          this.isClicked = index
        }
      }
    }
  }
</script>


<style>
.card-border-radius {
    border-radius: 15px !important;
}

.card-border-radius-bottom {
    border-radius: 0px 0px 15px 15px !important;
}

.custom-button {
    border: 1px solid #C0C0C0;
    border-radius: 8px;
    padding-top: .9em;
    padding-bottom: .9em;
    text-align: center;
    -webkit-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 4px 5px 0px rgba(0,0,0,0.3);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.26);
}

.button-text {
    font-family: 'Helvetica Neue';
    text-transform: capitalize;
}
</style>
