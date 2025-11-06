//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()
const util = require('util')
// Add your routes here


router.post('/part-1/hospital/child-in-hospital', function(request, response) {

    var isInHospital = request.session.data['in-hospital']
    if (isInHospital === "yes"){
        response.redirect("/part-1/hospital/went-in-date")
    } else {
        response.redirect("/part-1/hospital/overnight-stays")
    }
})

router.post('/part-1/hospital/overnight-stays', function(request, response) {

    var hasOvernight = request.session.data['overnight-stay']
    if (hasOvernight === "yes"){
        response.redirect("/part-1/hospital/went-in-and-out")
    } else {
        response.redirect("/end-screen")
    }
})


router.post('/part-1/foster-care/foster-carer', function(request, response) {

    var isFosterCarer = request.session.data['foster-carer']
    if (isFosterCarer === "yes"){
        response.redirect("/part-1/foster-care/when-child-placed")
    } else {
        response.redirect("/part-1/foster-care/relationship")
    }
})

router.post('/part-1/foster-care/who-placed', function(request, response) {

    var whoPlaced = request.session.data['who-placed']
    if (whoPlaced === "parent"){
        response.redirect("/end-screen")
    } else {
        response.redirect("/part-1/foster-care/name-of-la")
    }
})

router.post('/part-1/about-claimant/claimant-other-names', function(request, response) {

    var claimantName = request.session.data['claimant-name']
    if (claimantName === "yes"){
        response.redirect("/part-1/about-claimant/claimant-what-other-names")
    } else {
        response.redirect("/part-1/about-claimant/claimant-nino")
    }
})

router.post('/part-1/child-other-names', function(request, response) {

    var childName = request.session.data['child-name']
    if (childName === "yes"){
        response.redirect("/part-1/child-what-other-names")
    } else {
        response.redirect("/part-1/claimed-benefits")
    }
})

router.post('/part-1/going-abroad/child-abroad-over3', function(request, response) {

    var fosterCarer = request.session.data['foster-carer']
    if (fosterCarer === "yes"){
        response.redirect("/part-1/going-abroad/over-3")
    } else {
        response.redirect("/end-screen")
    }
})

router.post('/part-1/claimed-benefits', function(request, response) {

    var claimedBenefits = request.session.data['claimed-benefits']
    if (claimedBenefits === "yes"){
        response.redirect("/part-1/reference-number")
    } else {
        response.redirect("/end-screen")
    }
})

router.post('/part-1/reference-number', function(request, response) {

    var refNumber = request.session.data['ref-number']
    if (refNumber === "yes"){
        response.redirect("/part-1/reference-number-2")
    } else {
        response.redirect("/end-screen")
    }
})

router.post('/part-1/night-needs/need-to-get-up', function(request, response) {

    var getUp = request.session.data['get-up']
    if (getUp === "yes"){
        response.redirect("/part-1/night-needs/reasons")
    } else {
        response.redirect("/end-screen")
    }
})

router.post('/part-1/night-needs/need-to-get-up-2', function(request, response) {

    var getUp = request.session.data['get-up']
    if (getUp === "yes"){
        response.redirect("/part-1/night-needs/how-often")
    } else {
        response.redirect("/end-screen")
    }
})
router.post('/evidence-gathering2/tendencies', function(request, response) {

    var dT = request.session.data['dt']
    if (dT === "yes"){
        response.redirect("/evidence-gathering2/tendencies2")
    } else {
        response.redirect("/evidence-gathering2/child-safely")
    }
})
router.post('/evidence-gathering2/pe', function(request, response) {

    var pE = request.session.data['pe']
    if (pE === "yes"){
        response.redirect("/evidence-gathering2/child-supervision")
    } else {
        response.redirect("/evidence-gathering2/school-activities")
    }
})
router.post('/evidence-gathering2/child-supervision', function(request, response) {

    var cS = request.session.data['cs']
    if (cS === "yes"){
        response.redirect("/evidence-gathering2/indoor-supervision")
    } else {
        response.redirect("/evidence-gathering2/road-safety")
    }
})
router.post('/evidence-gathering2/road-safety', function(request, response) {

    var sA = request.session.data['sa']
    if (sA === "yes"){
        response.redirect("/evidence-gathering2/child-medication")
    } else {
        response.redirect("/evidence-gathering2/provide-details")
    }
})
router.post('/evidence-gathering2/child-medication', function(request, response) {

    var med = request.session.data['med']
    if (med === "yes"){
        response.redirect("/evidence-gathering2/what-medication")
    } else {
        response.redirect("/evidence-gathering2/further-details")
    }
})
router.post('/evidence-gathering2/send-us', function(request, response) {

    var send = request.session.data['send']
    if (send === "yes"){
        response.redirect("/evidence-gathering2/upload")
    } else {
        response.redirect("/evidence-gathering2/your-details")
    }
})
router.post('/evidence-gathering2/file-uploaded', function(request, response) {

    var file = request.session.data['file']
    if (file === "yes"){
        response.redirect("/evidence-gathering2/upload")
    } else {
        response.redirect("/evidence-gathering2/your-details")
    }
})
router.post('/evidence-gathering3/additional-support', function(request, response) {

    var as = request.session.data['as']
    if (as === "yes"){
        response.redirect("/evidence-gathering3/further-support")
    } else {
        response.redirect("/evidence-gathering3/education-plan")
    }
})

router.post('/evidence-gathering3/education-plan', function(request, response) {

    var ep = request.session.data['ep']
    if (ep === "yes"){
        response.redirect("/evidence-gathering3/plan-upload")
    } else {
        response.redirect("/evidence-gathering3/independently")
    }
})
router.post('/evidence-gathering3/independently', function(request, response) {

    var ind = request.session.data['ind']
    if (ind === "yes"){
        response.redirect("/evidence-gathering3/common-dangers")
    } else {
        response.redirect("/evidence-gathering3/move-around")
    }
})
router.post('/evidence-gathering3/common-dangers', function(request, response) {

    var cd = request.session.data['cd']
    if (cd === "yes"){
        response.redirect("/evidence-gathering3/child-safely")
    } else {
        response.redirect("/evidence-gathering3/awareness")
    }
})
router.post('/evidence-gathering3/need-medication', function(request, response) {

    var tm = request.session.data['tm']
    if (tm === "yes"){
        response.redirect("/evidence-gathering3/reminded")
    } else {
        response.redirect("/evidence-gathering3/behavioural")
    }
})
router.post('/evidence-gathering3/behavioural', function(request, response) {

    var bd = request.session.data['bd']
    if (bd === "yes"){
        response.redirect("/evidence-gathering3/behavioural2")
    } else {
        response.redirect("/evidence-gathering3/incidents")
    }
})

router.post('/evidence-gathering3/incidents', function(request, response) {

    var si = request.session.data['si']
    if (si === "yes"){
        response.redirect("/evidence-gathering3/incidents2")
    } else {
        response.redirect("/evidence-gathering3/sleep-problems")
    }
})

router.post('/evidence-gathering3/sleep-problems', function(request, response) {

    var sp = request.session.data['sp']
    if (sp === "yes"){
        response.redirect("/evidence-gathering3/sleep-problems2")
    } else {
        response.redirect("/evidence-gathering3/anymore-info2")
    }
})

router.post('/evidence-gathering3/file-uploaded', function(request, response) {

    var fileUpload = request.session.data['file-uploaded']
    if (fileUpload === "yes"){
        response.redirect("/evidence-gathering3/upload")
    } else {
        response.redirect("/evidence-gathering3/more-info")
    }
})

router.post('/evidence-gathering3/child-safely2', function(request, response) {

    var safely = request.session.data['safely']
    if (safely.includes("these")){
        response.redirect("/evidence-gathering3/help-they-need")
    } else {
        response.redirect("/evidence-gathering3/need-medication")
    }
})

router.post('/evidence-gathering3/anymore-info2', function(request, response) {

    var anymore = request.session.data['anymore']
    if (anymore.includes("no")){
        response.redirect("/evidence-gathering3/your-details")
    } else {
        response.redirect("/evidence-gathering3/upload")
    }
})
router.post('/evidence-gathering3/child-safely', function(request, response) {

    var ms = request.session.data['ms']
    if (ms === "yes"){
        response.redirect("/evidence-gathering3/help-they-need")
    } else {
        response.redirect("/evidence-gathering3/need-medication")
    }
})

// Evidence gather 4


router.post('/evidence-gathering4/schools-view/about-child', function(request, response) {

    var ms = request.session.data['kno']
    if (ms === "yes"){
        response.redirect("/evidence-gathering4/schools-view/child-dob")
    } 
        if (ms === "yesbut"){
        response.redirect("/evidence-gathering4/schools-view/tell-us-why")
    } 
    else {
        response.redirect("/evidence-gathering4/schools-view/do-not-know-this-child")
    }
})

router.post('/handle-sort-selection', function(request, response) {
const sort = request.body.sort;

if (sort === 'nino') {
    response.redirect('/evidence-gathering4/cms-view/national-insurance-number');
} else if (sort === 'case-reference') {
     response.redirect('evidence-gathering4/cms-view/case-details');
}
})

router.post('/choose-options', function (req, res) {
  const selected = req.body.options;

  if (!selected) {
    // Show error if nothing selected
    return res.render('choose-options', { error: true });
  }

  const selectedArray = Array.isArray(selected) ? selected : [selected];
  req.session.selectedOptions = selectedArray;
  req.session.currentStepIndex = 0;

  res.redirect('/evidence-gathering5/schools-view/checkboxes/personal-safety.html');
});



router.get('/choose-options', function (req, res) {
  res.render('choose-options');
});


router.post('/evidence-gathering5/schools-view/checkboxes/about-child', function(request, response) {

    var ms = request.session.data['live1']
    if (ms === "yesdirect"){
        response.redirect("/evidence-gathering5/schools-view/checkboxes/child-dob")
    } 
        if (ms === "yesbut"){
        response.redirect("/evidence-gathering5/schools-view/checkboxes/response-sent")
    } 
    else {
        response.redirect("/evidence-gathering5/schools-view//checkboxes/response-sent")
    }
})


router.post('/evidence-gathering5/schools-view/radio-buttons/about-child', function(request, response) {

    var ms = request.session.data['6kno']
    if (ms === "yes"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/child-dob")
    } 
        if (ms === "yesbut"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/response-sent")
    } 
    else {
        response.redirect("/evidence-gathering5/schools-view//radio-buttons/response-sent")
    }
})

router.post('/evidence-gathering5/schools-view/radio-buttons/individual-plans-question', function(request, response) {

    var ms = request.session.data['plan']
    if (ms === "yes"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/individual-plans")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/learning-support-question")
    } 
})

router.post('/evidence-gathering5/schools-view/radio-buttons/learning-support-question', function(request, response) {

    var ms = request.session.data['support']
    if (ms === "yes"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/additional-learning-support")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/behaviour-question")
    } 
})

router.post('/evidence-gathering5/schools-view/radio-buttons/behaviour-question', function(request, response) {

    var ms = request.session.data['behaviour']
    if (ms === "yes"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/behaviour-in-school")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/move-around-question")
    } 
})

router.post('/evidence-gathering5/schools-view/radio-buttons/move-around-question', function(request, response) {

    var ms = request.session.data['move']
    if (ms === "yes"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/move-around-school")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/personal-safety-question")
    } 
})

router.post('/evidence-gathering5/schools-view/radio-buttons/personal-safety-question', function(request, response) {

    var ms = request.session.data['safety']
    if (ms === "yes"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/personal-care-question")  
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/personal-safety")
    } 
})

router.post('/evidence-gathering5/schools-view/radio-buttons/personal-care-question', function(request, response) {

    var ms = request.session.data['care']
    if (ms === "yes"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/therapy-or-medication-question") 
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/personal-care")
    } 
})

router.post('/evidence-gathering5/schools-view/radio-buttons/therapy-or-medication-question', function(request, response) {

    var ms = request.session.data['therapy']
    if (ms === "yes"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/therapy-or-medication")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/sleep-problems-question")
    } 
})

router.post('/evidence-gathering5/schools-view/radio-buttons/sleep-problems-question', function(request, response) {

    var ms = request.session.data['sleep']
    if (ms === "yes"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/sleep-problems")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering5/schools-view/radio-buttons/check-answers")
    } 
})

// CHECKBOX LOGIC

// Define page order
const pageOrder = ['individual-plans', 
    'additional-learning-support', 
    'behaviour-in-school', 
    'move-around-school',
    'personal-safety',
    'personal-care',
    'therapy-or-medication',
    'sleep-problems',
]

// Form submission
router.post('/evidence-gathering5/schools-view/checkboxes/submit', (req, res) => {
  // Normalize options to an array
  const options = req.session.data['options'] = Array.isArray(req.body['options']) ? req.body['options'] : req.body['options'] ? [req.body['options']] : []

  // Redirect to error page if no options selected
  if (!options || options.length === 0) {
    return res.redirect('/evidence-gathering5/schools-view/checkboxes/provide-information-error')
  }

  // Store selected pages and initialize index
  req.session.data['selectedPages'] = options
  req.session.data['currentPageIndex'] = 0

  // Redirect to first selected page
  const firstPage = options.find(page => pageOrder.includes(page))
  if (!firstPage) {
    return res.redirect('/evidence-gathering5/schools-view/checkboxes/provide-information-error')
  }
  res.redirect(`/evidence-gathering5/schools-view/checkboxes/${firstPage}`)
})

// Page submissions
router.post('/evidence-gathering5/schools-view/checkboxes/submit-page1', (req, res) => {
  nextPage(req, res)
})

router.post('/evidence-gathering5/schools-view/checkboxes/submit-page2', (req, res) => {
  nextPage(req, res)
})

router.post('/evidence-gathering5/schools-view/checkboxes/submit-page3', (req, res) => {
  nextPage(req, res)
})

router.post('/evidence-gathering5/schools-view/checkboxes/submit-page4', (req, res) => {
  nextPage(req, res)
})

router.post('/evidence-gathering5/schools-view/checkboxes/submit-page5', (req, res) => {
  nextPage(req, res)
})

router.post('/evidence-gathering5/schools-view/checkboxes/submit-page6', (req, res) => {
  nextPage(req, res)
})

router.post('/evidence-gathering5/schools-view/checkboxes/submit-page7', (req, res) => {
  nextPage(req, res)
})


router.post('/evidence-gathering5/schools-view/checkboxes/submit-page8', (req, res) => {
  nextPage(req, res)
})


// Helper function to navigate to the next page
function nextPage(req, res) {
  const selectedPages = req.session.data['selectedPages'] || []
  const currentPageIndex = req.session.data['currentPageIndex'] || 0

  // If only one page was selected, go to confirmation
  if (selectedPages.length === 1) {
    req.session.data['options'] = null
    req.session.data['selectedPages'] = null
    req.session.data['currentPageIndex'] = null
    return res.redirect('/evidence-gathering5/schools-view/checkboxes/check-answers')
  }

  // Find the next selected page
  const nextPageIndex = currentPageIndex + 1
  const nextPage = selectedPages[nextPageIndex]

  if (nextPage && pageOrder.includes(nextPage)) {
    req.session.data['currentPageIndex'] = nextPageIndex
    res.redirect(`/evidence-gathering5/schools-view/checkboxes/${nextPage}`)
  } else {
    // Clear session data
    req.session.data['options'] = null
    req.session.data['selectedPages'] = null
    req.session.data['currentPageIndex'] = null
    res.redirect('/evidence-gathering5/schools-view/checkboxes/check-answers')
  }
}

// RADIO BUTTONS evidence gathering 6

router.get('/choose-options', function (req, res) {
  res.render('choose-options');
});

router.post('/evidence-gathering6/schools-view/about-child', function(request, response) {

    var ms = request.session.data['6kno']
    if (ms === "yes"){
        response.redirect("/evidence-gathering6/schools-view/child-dob")
    } 
        if (ms === "yesbut"){
        response.redirect("/evidence-gathering6/schools-view/check-answers-child")
    } 
    else {
        response.redirect("/evidence-gathering6/schools-view/check-answers-no-child")
    }
})

router.post('/evidence-gathering6/schools-view/learning-support-question', function(request, response) {

    var ms = request.session.data['support']
    if (ms === "yes"){
        response.redirect("/evidence-gathering6/schools-view/additional-learning-support")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering6/schools-view/behaviour-question")
    } 
})

router.post('/evidence-gathering6/schools-view/behaviour-question', function(request, response) {

    var ms = request.session.data['behaviour']
    if (ms === "yes"){
        response.redirect("/evidence-gathering6/schools-view/behaviour-in-school")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering6/schools-view/move-around-question")
    } 
})

router.post('/evidence-gathering6/schools-view/move-around-question', function(request, response) {

    var ms = request.session.data['move']
    if (ms === "yes"){
        response.redirect("/evidence-gathering6/schools-view/move-around-school")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering6/schools-view/personal-safety-question")
    } 
})

router.post('/evidence-gathering6/schools-view/personal-safety-question', function(request, response) {

    var ms = request.session.data['safety']
    if (ms === "yes"){
        response.redirect("/evidence-gathering6/schools-view/personal-safety")  
    } 
        if (ms === "no"){ 
        response.redirect("/evidence-gathering6/schools-view/personal-care-question")
    } 
})

router.post('/evidence-gathering6/schools-view/personal-care-question', function(request, response) {

    var ms = request.session.data['care']
    if (ms === "yes"){
        response.redirect("/evidence-gathering6/schools-view/personal-care") 
    } 
        if (ms === "no"){ 
        response.redirect("/evidence-gathering6/schools-view/therapy-or-medication-question")
    } 
})

router.post('/evidence-gathering6/schools-view/therapy-or-medication-question', function(request, response) {

    var ms = request.session.data['therapy']
    if (ms === "yes"){
        response.redirect("/evidence-gathering6/schools-view/therapy-or-medication")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering6/schools-view/sleep-problems-question")
    } 
})

router.post('/evidence-gathering6/schools-view/sleep-problems-question', function(request, response) {

    var ms = request.session.data['sleep']
    if (ms === "yes"){
        response.redirect("/evidence-gathering6/schools-view/sleep-problems")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering6/schools-view/individual-plans-question")
    } 
})

router.post('/evidence-gathering6/schools-view/individual-plans-question', function(request, response) {

    var ms = request.session.data['plan']
    if (ms === "yes"){
        response.redirect("/evidence-gathering6/schools-view/individual-plans")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering6/schools-view/check-answers")
    } 
})

router.post('/handle-sort-selection-v6', function(request, response) {
const sort = request.body.sort;

if (sort === 'nino') {
    response.redirect('/evidence-gathering6/cms-view/national-insurance-number');
} else if (sort === 'case-reference') {
     response.redirect('evidence-gathering6/cms-view/case-details');
}
})


// RADIO BUTTONS evidence gathering 7

router.get('/choose-options', function (req, res) {
  res.render('choose-options');
});

router.post('/evidence-gathering7/schools-view/about-child', function(request, response) {

    var ms = request.session.data['6kno']
    if (ms === "yes"){
        response.redirect("/evidence-gathering7/schools-view/child-dob")
    } 
        if (ms === "yesbut"){
        response.redirect("/evidence-gathering7/schools-view/check-answers-child")
    } 
    else {
        response.redirect("/evidence-gathering7/schools-view/check-answers-no-child")
    }
})

router.post('/evidence-gathering7/schools-view/learning-support-question', function(request, response) {

    var ms = request.session.data['support']
    if (ms === "yes"){
        response.redirect("/evidence-gathering7/schools-view/additional-learning-support")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering7/schools-view/behaviour-question")
    } 
})

router.post('/evidence-gathering7/schools-view/behaviour-question', function(request, response) {

    var ms = request.session.data['behaviour']
    if (ms === "yes"){
        response.redirect("/evidence-gathering7/schools-view/behaviour-in-school")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering7/schools-view/move-around-question")
    } 
})

router.post('/evidence-gathering7/schools-view/move-around-question', function(request, response) {

    var ms = request.session.data['move']
    if (ms === "yes"){
        response.redirect("/evidence-gathering7/schools-view/move-around-school")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering7/schools-view/personal-safety-question")
    } 
})

router.post('/evidence-gathering7/schools-view/personal-safety-question', function(request, response) {

    var ms = request.session.data['safety']
    if (ms === "yes"){
        response.redirect("/evidence-gathering7/schools-view/personal-safety")  
    } 
        if (ms === "no"){ 
        response.redirect("/evidence-gathering7/schools-view/personal-care-question")
    } 
})

router.post('/evidence-gathering7/schools-view/personal-care-question', function(request, response) {

    var ms = request.session.data['care']
    if (ms === "yes"){
        response.redirect("/evidence-gathering7/schools-view/personal-care") 
    } 
        if (ms === "no"){ 
        response.redirect("/evidence-gathering7/schools-view/therapy-or-medication-question")
    } 
})

router.post('/evidence-gathering7/schools-view/therapy-or-medication-question', function(request, response) {

    var ms = request.session.data['therapy']
    if (ms === "yes"){
        response.redirect("/evidence-gathering7/schools-view/therapy-or-medication")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering7/schools-view/sleep-problems-question")
    } 
})

router.post('/evidence-gathering7/schools-view/sleep-problems-question', function(request, response) {

    var ms = request.session.data['sleep']
    if (ms === "yes"){
        response.redirect("/evidence-gathering7/schools-view/sleep-problems")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering7/schools-view/individual-plans-question")
    } 
})

router.post('/evidence-gathering7/schools-view/individual-plans-question', function(request, response) {

    var ms = request.session.data['plan']
    if (ms === "yes"){
        response.redirect("/evidence-gathering7/schools-view/individual-plans")
    } 
        if (ms === "no"){
        response.redirect("/evidence-gathering7/schools-view/check-answers")
    } 
})

router.post('/handle-sort-selection-v7', function(request, response) {
const sort = request.body.sort;

if (sort === 'nino') {
    response.redirect('/evidence-gathering7/cms-view/national-insurance-number');
} else if (sort === 'case-reference') {
     response.redirect('evidence-gathering7/cms-view/case-details');
}
})
