import Head from 'next/head';
import React from 'react';
import TitleWithShadow from '../components/UI/titleWithShadow';
import Layout from '../layouts/layout';
const cookiePolicy = () => {
	return (
		<div className='container mx-auto pt-20 pb-10 text-slate-600'>
			<Head>
				<title>Cookie policy</title>
				<meta name="description" content="Billntrade Cookie policy" />
			</Head>
			<h1 className='mb-4 md:mb-10 text-2xl md:text-6xl'>
				<TitleWithShadow>Cookie policy</TitleWithShadow>
			</h1>
			<h2 className='text-neutral-700 font-medium text-lg my-4'>
            WHAT ARE COOKIES AND LOCAL STORAGE
			</h2>
			<p>
      Cookies are small text files that get stored on your computer when you visit certain web pages. Local
storage is an industry standard technology that allows us to store and retrieve small amounts of data on
your computer, mobile phone or other device. At Billntrade.com we use cookies and local storage to
remember you when you return to our site and to optimise your experience when landing on
Billntrade.com. To submit a job on Billntrade.com you need to have cookies enabled. Most web
browsers have cookies enabled by default, see Managing cookies for help to turn them on should you
need to. Please note that cookies can’t harm your computer. We don’t store personally identifiable
information such as credit card details in cookies we create, but we do use encrypted information
gathered from them to help improve your experience of the Billntrade.com site. For example, they help
us to identify and resolve errors that may occur on the website. From time to time we may have
relationships with carefully-selected and monitored partners who may set cookies during your visit to
be used for remarketing purposes; this means to show you products and services that you appear to be
interested in (see the ‘third party cookie policy’ tab). If you’d like to opt out, please go to the Network
Advertising Initiative website (opens in a new window – please note that we’re not responsible for the
content of external websites). We’re giving you this information as part of our initiative to comply with
recent legislation, and to make sure we’re honest and clear about your privacy when using our website.
We know you’d expect this from us, and please be assured that we’re working on a number of other
privacy and cookie-related improvements to the website.
			</p>
			<br/>
			<p>
      To make full use of Billntrade.com, your computer, tablet or mobile phone will need to accept cookies,
as we can only provide you with certain personalised features of this website by using them. Our
cookies don’t store sensitive information such as your name, address or payment details: they simply
hold the ‘key’ that, once you’re signed in, is associated with this information. However, if you’d prefer
to restrict, block or delete cookies from Billntrade.com, or any other website, you can use your browser
to do this. Each browser is different, so check the ‘Help’ menu of your particular browser (or your
mobile phone’s handset manual) to learn how to change your cookie preferences.
			</p>
			<h2 className='text-neutral-700 font-medium text-lg my-4'>
      THIRD PARTY COOKIE POLICY 
			</h2>
			<p>
      When you visit Billntrade.com you may notice some cookies that aren’t related to Rated People. For
example, if you go on to a web page that contains embedded content such as YouTube you may be sent
cookies from these websites. We don’t control the setting of these cookies, so we suggest you check
the third-party websites for more information about their cookies and how to manage them. Some of
the business partners that may set cookies on Billntrade.com include: google-analytics.com,
google.com, googleadservices.com, googleapis.com, gstatic.com – we use google analytics to measure
traffic to our site. It also provides insights into the source of the traffic, so we can optimise our site for
our customers.
			</p>
			<h2 className='text-neutral-700 font-medium text-lg my-4'>
      MANAGING COOKIES, LOCAL STORAGE AND FURTHER INFORMATION ON COOKIES
			</h2>
			<p>
      If cookies aren’t enabled on your computer, it will mean that you can’t use the website. If you’d like to
learn more about cookies in general and how to manage them, visit ICO.org (opens in a new window –
please note that we can’t be responsible for the content of external websites).
			</p>
		</div>
	);
};

export default cookiePolicy;

cookiePolicy.layout = Layout;