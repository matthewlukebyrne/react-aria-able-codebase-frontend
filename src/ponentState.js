// import images from Storybook js here
import alert_img from './img/snippets/alert_img.png';
import banner_img from './img/snippets/banner_img.png';
import button_img from './img/snippets/button_img.png';
import checkbox_img from './img/snippets/checkbox_img.png';
import comp_img from './img/snippets/comp_img.png';
import dialog_img from './img/snippets/dialog_img.png';
import document_img from './img/snippets/document_img.png';
import feed_img from './img/snippets/feed_img.png';
import orient_img from './img/snippets/orient_img.png';
import required_img from './img/snippets/required_img.png';
import search_img from './img/snippets/search_img.png';
import switch_img from './img/snippets/switch_img.png';
import tab_img from './img/snippets/tab_img.png';
import textbox_img from './img/snippets/textbox_img.png';
import value_img from './img/snippets/value_img.png';

export const PonentState = () => {
  return [
    {
      title: 'ARIA: alert role',
      mainImg: alert_img,
      url: '/components/alert-role',
      features: [
        {
          usage:
            'The alert role can be used to tell the user an element has been dynamically updated. Screen readers will instantly start reading out the updated content when the role is added. If the user is expected to close the alert, then the alertdialog role should be used instead.',
          description:
            'One of the five live region roles, the alert role is used to provide the user with important, and usually time-sensitive, information, and often to tell the user an element has been dynamically updated.',
        },
      ],
    },
    {
      title: 'ARIA: banner role',
      mainImg: banner_img,
      url: '/components/banner-role',
      features: [
        {
          usage:
            'A banner role represents general and informative content frequently placed at the beginning of the page. This usually includes a logo, company name, search icon, photo related to the page, or slogan.',
          description:
            'A banner landmark role converts the container element upon which it is applied into a header. It should be reserved for the site header content that is common across the site generally at the top of every page.',
        },
      ],
    },
    {
      title: 'ARIA: button role',
      mainImg: button_img,
      url: '/components/button-role',
      features: [
        {
          usage:
            'The button role should be used for clickable elements that trigger a response when activated by the user.',
          description:
            'The button role identifies an element as a button to screen readers. A button is a widget used to perform actions such as submitting a form, opening a dialog, cancelling an action, or performing a command such as inserting a new record or displaying information.',
        },
      ],
    },
    {
      title: 'ARIA: checkbox role',
      mainImg: checkbox_img,
      url: '/components/checkbox-role',
      features: [
        {
          usage:
            'The checkbox role is used for checkable interactive controls. Elements containing role="checkbox" must also include the aria-checked attribute to expose the checkbox state to assistive technology.',
          description:
            'The native HTML checkbox form control can only have two checked states ("checked" or "not checked"), with an indeterminate state settable via JavaScript. Similarly, an element with role="checkbox" can expose three states through the aria-checked attribute: true, false, or mixed.',
        },
      ],
    },
    {
      title: 'ARIA: Complementary role',
      mainImg: comp_img,
      url: '/components/comp-role',
      features: [
        {
          usage:
            'The complementary landmark role is used to designate a supporting section that relates to the main content, yet can stand alone when separated. These sections are frequently presented as sidebars or call-out boxes. If possible, use the HTML aside element instead.',
          description:
            'The complementary role is a landmark role. Landmarks can be used by assistive technology to quickly identify and navigate to large sections of the document. Content listed within a container with the complementary landmark role should make sense if separated from the main content of the document.',
        },
      ],
    },
    {
      title: 'ARIA: dialog role',
      mainImg: dialog_img,
      url: '/components/dialog-role',
      features: [
        {
          usage:
            'The dialog role is used to mark up an HTML based application dialog or window that separates content or UI from the rest of the web application or page. Dialogs are generally placed on top of the rest of the page content using an overlay.',
          description:
            'Marking up a dialog element with the dialog role helps assistive technology identify the dialogs content as being grouped and separated from the rest of the page content. However, adding role="dialog" alone is not sufficient to make a dialog accessible.',
        },
      ],
    },
    {
      title: 'ARIA: document role',
      mainImg: document_img,
      url: '/components/document-role',
      features: [
        {
          usage:
            'Generally used in complex composite widgets or applications, the document role can inform assistive technologies to switch context to a reading mode: The document role tells assistive technologies with reading or browse modes to use the document mode to read the content contained within this element.',
          description:
            'By default, web pages are treated as documents; assistive technologies (AT) enter browse or read mode when entering a new web page. This mode can be altered through various roles, including the widget and application roles. The document role brings the AT back into browse or read mode.',
        },
      ],
    },
    {
      title: 'ARIA: feed role',
      mainImg: feed_img,
      url: '/components/feed-role',
      features: [
        {
          usage:
            'A feed is a dynamic scrollable list of articles in which articles are added to or removed from either end of the list as the user scrolls. A feed enables screen readers to use the browse mode reading cursor to both read and scroll through a stream of rich content that may continue scrolling infinitely by loading more content as the user reads.',
          description:
            'A feed is a page structure for a scrollable list of articles where scrolling may cause articles to be added to the top or end of the list.',
        },
      ],
    },
    {
      title: 'Using the aria-orientation attribute',
      mainImg: orient_img,
      url: '/components/orient-role',
      features: [
        {
          usage:
            'The aria-orientation attribute is used to indicate whether an element is oriented horizontally or vertically.',
          description:
            'Note: Opinions may differ on how assistive technology should handle this technique. The information provided above is one of those opinions and therefore not normative.',
        },
      ],
    },
    {
      title: 'Using the aria-required attribute',
      mainImg: required_img,
      url: '/components/req-role',
      features: [
        {
          usage:
            'The aria-required attribute is used to indicate that user input is required on an element before a form can be submitted. This attribute can be used with any typical HTML form element; it is not limited to elements that have an ARIA role assigned.',
          description:
            'Screen readers should announce the field as required. Note that this attribute will not automatically change the presentation of the field.',
        },
      ],
    },
    {
      title: 'ARIA: search role',
      mainImg: search_img,
      url: '/components/search-role',
      features: [
        {
          usage:
            'The search landmark role is used to identify a section of the page used to search the page, site, or collection of sites.',
          description:
            'Landmarks can be used by assistive technology to quickly identify and navigate to large sections of the document.',
        },
      ],
    },
    {
      title: 'ARIA: switch role',
      mainImg: switch_img,
      url: '/components/switch-role',
      features: [
        {
          usage:
            'The ARIA switch role is functionally identical to the checkbox role, except that instead of representing "checked" and "unchecked" states, which are fairly generic in meaning, the switch role represents the states "on" and "off."',
          description:
            'Like the checkbox role, the aria-checked attribute is required. The two possible values are true and false. Unlike a checkbox or role="checkbox", there is no indeterminate or mixed state.',
        },
      ],
    },
    {
      title: 'ARIA: tab role',
      mainImg: tab_img,
      url: '/components/tab-role',
      features: [
        {
          usage:
            'The ARIA tab role indicates an interactive element inside a tablist that, when activated, displays its associated tabpanel.',
          description:
            'An element with the tab role controls the visibility of an associated element with the tabpanel role. The common user experience pattern is a group of visual tabs above, or to the side of, a content area, and selecting a different tab changes the content and makes the selected tab more prominent than the other tabs.',
        },
      ],
    },
    {
      title: 'ARIA: textbox role',
      mainImg: textbox_img,
      url: '/components/textbox-role',
      features: [
        {
          usage:
            'The textbox role is used to identify an element that allows the input of free-form text.',
          description:
            'When an element has the textbox role, the browser sends an accessible textbox event to assistive technologies, which can then notify the user about it.',
        },
      ],
    },
    {
      title: 'Using the aria-valuetext attribute',
      mainImg: value_img,
      url: '/components/value-role',
      features: [
        {
          usage:
            'The aria-valuetext attribute is used to define the human readable text alternative of aria-valuenow for a range widget such as progressbar, spinbutton or slider.',
          description:
            'If the aria-valuetext attribute is absent, assistive technologies will rely solely on the aria-valuenow attribute for the current value.',
        },
      ],
    },
  ];
};
