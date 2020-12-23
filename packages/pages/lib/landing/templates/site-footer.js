const html = require('../../html/html');

module.exports = function siteFooter() {
	return html`
		<footer class="site-footer">
			<div class="wrapper">
				<div class="site-footer__inner">
					<div class="site-footer__logo-container">
						<a
							class="site-footer__logo"
							href="https://www.mrhenry.be/"
							rel="noopener"
							target="_blank"
						>
							<span class="u-visually-hidden">
								Mr Henry's website
							</span>

							<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle fill="#ffd41b" cx="256" cy="256" r="256"/><path d="M221.2,136.5642,234.9731,180.81l8.2653,21.9326a8.1051,8.1051,0,0,0,1.2553,2.0946l15.4586,18.5263,8.4346,7.2075a7.948,7.948,0,0,0,2.99,1.6079l11.1426,3.1735a7.9944,7.9944,0,0,0,6.6432-1.0578l10.55-7.1158a8.0285,8.0285,0,0,0,3.103-4.0833l7.8562-23.3924a7.2466,7.2466,0,0,0,.3526-1.5374l1.65-13.357-.1129-13.66-3.921-23.7592.268-11.6574a8.3477,8.3477,0,0,0-.1411-1.6785l-3.8364-23.872a7.9654,7.9654,0,1,0-15.7972,2.0593l1.6644,12.687,2.158,11.2837-.268,11.5869a8.0976,8.0976,0,0,0,.1128,1.5445l3.9211,23.0539.0846,11.4036-1.481,11.5516-6.77,20.1273-5.2328,3.5261-5.9521-1.6925-6.0791-5.0565-13.759-16.6716-3.7236-9.14L236.2,131.2609,231.75,120.64a7.9685,7.9685,0,1,0-14.6969,6.1637Z"/><path d="M138.8927,225.3878a7.8358,7.8358,0,0,0,1.3047,2.8915l6.2131,8.639,3.8928,9.8521a8.0324,8.0324,0,0,0,2.151,3.0536l17.0806,14.9086a7.9253,7.9253,0,0,0,4.182,1.8759l10.7759,1.41a7.3127,7.3127,0,0,0,1.0367.0706,8.0419,8.0419,0,0,0,4.048-1.1l10.1412-5.9733a7.986,7.986,0,0,0,3.3851-3.9916l4.6193-12.0876,3.2511-12.6377,1.8124-13.3923-.2468-24.7112a7.8428,7.8428,0,0,0-.1975-1.6714l-2.5458-10.8112-.7829-12.8986-1.8547-13.1032-3.0678-11.8831a7.9674,7.9674,0,1,0-15.43,3.9775l2.8844,10.9733,1.615,11.587.91,13.5756,2.5389,11.27.3173,22.6449-1.5515,11.3048-2.7927,10.8817-3.3428,8.6461-5.395,3.1735-5.6841-.74-13.7379-12.003-3.5543-8.9847a7.8737,7.8737,0,0,0-.9451-1.7207l-5.8534-8.1384-2.433-10.5784-11.1849-32.095-5.254-21.714a7.9656,7.9656,0,0,0-15.5856,3.3l5.6278,23.1456,11.0721,31.6789Z"/><path d="M448.8691,240.2611a7.8725,7.8725,0,0,0-10.2258-4.4782l-9.5206,3.7236-9.3936,1.1989-9.168-.7969-17.7859-8.7166-7.4472-6.1567-6.46-8.3146A7.8955,7.8955,0,0,0,366.4,226.41l6.9959,8.9987a8.0668,8.0668,0,0,0,1.213,1.2413l8.7307,7.2144a7.4368,7.4368,0,0,0,1.2977.8675l7.2506,3.8708a7.816,7.816,0,0,0-2.0319,3.0968L385.92,263.6677l-3.3146,12.56-1.4528,10.5361-5.6559,10.6631L372.31,307.4413l-11.5658,21.721-3.6108,9.0552-8.237,5.7264a8.1267,8.1267,0,0,0-2.6235,3.0748l-4.5558,9.45-7.0382,5.1482L312.5907,371.73l-9.3373,5.5431-9.309,3.907-11.594-.9027-11.6786.9591a8.025,8.025,0,0,0-2.37.5642l-10.247,4.1891-8.5262-.2116-9.6969-5.0776a8.4652,8.4652,0,0,0-4.4077-.8886l-10.2541.9168-9.3372-3.8788a8.0891,8.0891,0,0,0-2.2285-.5642L203.1179,375.2l-10.1764-5.12-11.0651-4.2032a7.1153,7.1153,0,0,0-1.4245-.3949l-10.6067-1.9041-9.33-5.1059a9.1877,9.1877,0,0,0-1.6079-.6629l-10.55-2.976-11.0016-4.8661a7.9725,7.9725,0,0,0-6.4458,14.5841l12.01,5.2328,10.72,3.103,9.6969,5.3033a8.1564,8.1564,0,0,0,2.4189.8463l11.1708,2.0029,9.577,3.5966,10.7336,5.4444a7.9983,7.9983,0,0,0,2.7786.8181l10.783,1.1142,10.0777,4.1891a8.6683,8.6683,0,0,0,3.7589.5783l9.8661-.8745,9.2667,4.852a7.835,7.835,0,0,0,3.505.9168l12.0594.2962h.1975a7.9121,7.9121,0,0,0,3.0184-.5924l10.6913-4.3724,9.0692-.8463,12.2569,1.0578a8.2755,8.2755,0,0,0,3.78-.5924l12.0171-5.12,9.3091-5.529,11.3541-4.7533,11.8338-5.9944,9.8027-7.0241a7.9274,7.9274,0,0,0,2.5388-3.0043l4.5135-9.3654,8.4909-5.8957a8.0726,8.0726,0,0,0,2.8492-3.5826l4.1467-10.5079,11.6786-22.116,3.1876-10,5.797-10.6771a8.3426,8.3426,0,0,0,.8886-2.7222l1.4528-10.9452,6.7984-22.6942a7.7117,7.7117,0,0,0,.2221-1.8839l.1446.0644a8.0316,8.0316,0,0,0,2.5247.6488l11.326.98c.2257.0211.4514.0282.677.0282a7.9579,7.9579,0,0,0,1.0014-.0635l11.185-1.4316a7.9763,7.9763,0,0,0,1.8759-.48L444.398,250.48A7.8865,7.8865,0,0,0,448.8691,240.2611Z"/></svg>
						</a>
					</div>

					<div class="site-footer__content-container">
						<p>
							We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Must go faster. Did he just throw my cat out of the window? Jaguar shark! So tell me - does it really exist?
						</p>

						<p>
							<a href="">
								A link
							</a>,

							<a href="">
								Another link
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	`;
}
