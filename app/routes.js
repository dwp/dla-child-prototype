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

// EDUCATIONAL PROFESSIONAL ROUND 0

router.post('/educational-professional-round-0/tendencies', function(request, response) {

    var dT = request.session.data['dt']
    if (dT === "yes"){
        response.redirect("/educational-professional-round-0/tendencies2")
    } else {
        response.redirect("/educational-professional-round-0/child-safely")
    }
})
router.post('/educational-professional-round-0/pe', function(request, response) {

    var pE = request.session.data['pe']
    if (pE === "yes"){
        response.redirect("/educational-professional-round-0/child-supervision")
    } else {
        response.redirect("/educational-professional-round-0/school-activities")
    }
})
router.post('/educational-professional-round-0/child-supervision', function(request, response) {

    var cS = request.session.data['cs']
    if (cS === "yes"){
        response.redirect("/educational-professional-round-0/indoor-supervision")
    } else {
        response.redirect("/educational-professional-round-0/road-safety")
    }
})
router.post('/educational-professional-round-0/road-safety', function(request, response) {

    var sA = request.session.data['sa']
    if (sA === "yes"){
        response.redirect("/educational-professional-round-0/child-medication")
    } else {
        response.redirect("/educational-professional-round-0/provide-details")
    }
})
router.post('/educational-professional-round-0/child-medication', function(request, response) {

    var med = request.session.data['med']
    if (med === "yes"){
        response.redirect("/educational-professional-round-0/what-medication")
    } else {
        response.redirect("/educational-professional-round-0/further-details")
    }
})
router.post('/educational-professional-round-0/send-us', function(request, response) {

    var send = request.session.data['send']
    if (send === "yes"){
        response.redirect("/educational-professional-round-0/upload")
    } else {
        response.redirect("/educational-professional-round-0/your-details")
    }
})
router.post('/educational-professional-round-0/file-uploaded', function(request, response) {

    var file = request.session.data['file']
    if (file === "yes"){
        response.redirect("/educational-professional-round-0/upload")
    } else {
        response.redirect("/educational-professional-round-0/your-details")
    }
})

// EDUCATIONAL PROFESSIONAL ROUND 1

router.post('/educational-professional-round-1/additional-support', function(request, response) {

    var as = request.session.data['as']
    if (as === "yes"){
        response.redirect("/educational-professional-round-1/further-support")
    } else {
        response.redirect("/educational-professional-round-1/education-plan")
    }
})

router.post('/educational-professional-round-1/education-plan', function(request, response) {

    var ep = request.session.data['ep']
    if (ep === "yes"){
        response.redirect("/educational-professional-round-1/plan-upload")
    } else {
        response.redirect("/educational-professional-round-1/independently")
    }
})
router.post('/educational-professional-round-1/independently', function(request, response) {

    var ind = request.session.data['ind']
    if (ind === "yes"){
        response.redirect("/educational-professional-round-1/common-dangers")
    } else {
        response.redirect("/educational-professional-round-1/move-around")
    }
})
router.post('/educational-professional-round-1/common-dangers', function(request, response) {

    var cd = request.session.data['cd']
    if (cd === "yes"){
        response.redirect("/educational-professional-round-1/child-safely")
    } else {
        response.redirect("/educational-professional-round-1/awareness")
    }
})
router.post('/educational-professional-round-1/need-medication', function(request, response) {

    var tm = request.session.data['tm']
    if (tm === "yes"){
        response.redirect("/educational-professional-round-1/reminded")
    } else {
        response.redirect("/educational-professional-round-1/behavioural")
    }
})
router.post('/educational-professional-round-1/behavioural', function(request, response) {

    var bd = request.session.data['bd']
    if (bd === "yes"){
        response.redirect("/educational-professional-round-1/behavioural2")
    } else {
        response.redirect("/educational-professional-round-1/incidents")
    }
})

router.post('/educational-professional-round-1/incidents', function(request, response) {

    var si = request.session.data['si']
    if (si === "yes"){
        response.redirect("/educational-professional-round-1/incidents2")
    } else {
        response.redirect("/educational-professional-round-1/sleep-problems")
    }
})

router.post('/educational-professional-round-1/sleep-problems', function(request, response) {

    var sp = request.session.data['sp']
    if (sp === "yes"){
        response.redirect("/educational-professional-round-1/sleep-problems2")
    } else {
        response.redirect("/educational-professional-round-1/anymore-info2")
    }
})

router.post('/educational-professional-round-1/file-uploaded', function(request, response) {

    var fileUpload = request.session.data['file-uploaded']
    if (fileUpload === "yes"){
        response.redirect("/educational-professional-round-1/upload")
    } else {
        response.redirect("/educational-professional-round-1/more-info")
    }
})

router.post('/educational-professional-round-1/child-safely2', function(request, response) {

    var safely = request.session.data['safely']
    if (safely.includes("these")){
        response.redirect("/educational-professional-round-1/help-they-need")
    } else {
        response.redirect("/educational-professional-round-1/need-medication")
    }
})

router.post('/educational-professional-round-1/anymore-info2', function(request, response) {

    var anymore = request.session.data['anymore']
    if (anymore.includes("no")){
        response.redirect("/educational-professional-round-1/your-details")
    } else {
        response.redirect("/educational-professional-round-1/upload")
    }
})
router.post('/educational-professional-round-1/child-safely', function(request, response) {

    var ms = request.session.data['ms']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-1/help-they-need")
    } else {
        response.redirect("/educational-professional-round-1/need-medication")
    }
})

// EDUCATIONAL PROFESSIONAL ROUND 2

router.post('/educational-professional-round-2/about-child', function(request, response) {

    var ms = request.session.data['kno']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-2/child-dob")
    } 
        if (ms === "yesbut"){
        response.redirect("/educational-professional-round-2/tell-us-why")
    } 
    else {
        response.redirect("/educational-professional-round-2/do-not-know-this-child")
    }
})

router.post('/handle-sort-selection', function(request, response) {
const sort = request.body.sort;

if (sort === 'nino') {
    response.redirect('national-insurance-number');
} else if (sort === 'case-reference') {
     response.redirect('case-details');
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

  res.redirect('/educational-professional-round-3/checkboxes/personal-safety.html');
});

router.get('/choose-options', function (req, res) {
  res.render('choose-options');
});


// EDUCATIONAL PROFESSIONAL ROUND 3 RADIO BUTTONS

router.post('/educational-professional-round-3/radio-buttons/about-child', function(request, response) {

    var ms = request.session.data['6kno']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-3/radio-buttons/child-dob")
    } 
        if (ms === "yesbut"){
        response.redirect("/educational-professional-round-3/radio-buttons/response-sent")
    } 
    else {
        response.redirect("/educational-professional-round-3/radio-buttons/response-sent")
    }
})

router.post('/educational-professional-round-3/radio-buttons/individual-plans-question', function(request, response) {

    var ms = request.session.data['plan']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-3/radio-buttons/individual-plans")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-3/radio-buttons/learning-support-question")
    } 
})

router.post('/educational-professional-round-3/radio-buttons/learning-support-question', function(request, response) {

    var ms = request.session.data['support']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-3/radio-buttons/additional-learning-support")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-3/radio-buttons/behaviour-question")
    } 
})

router.post('/educational-professional-round-3/radio-buttons/behaviour-question', function(request, response) {

    var ms = request.session.data['behaviour']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-3/radio-buttons/behaviour-in-school")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-3/radio-buttons/move-around-question")
    } 
})

router.post('/educational-professional-round-3/radio-buttons/move-around-question', function(request, response) {

    var ms = request.session.data['move']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-3/radio-buttons/move-around-school")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-3/radio-buttons/personal-safety-question")
    } 
})

router.post('/educational-professional-round-3/radio-buttons/personal-safety-question', function(request, response) {

    var ms = request.session.data['safety']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-3/radio-buttons/personal-care-question")  
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-3/radio-buttons/personal-safety")
    } 
})

router.post('/educational-professional-round-3/radio-buttons/personal-care-question', function(request, response) {

    var ms = request.session.data['care']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-3/radio-buttons/therapy-or-medication-question") 
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-3/radio-buttons/personal-care")
    } 
})

router.post('/educational-professional-round-3/radio-buttons/therapy-or-medication-question', function(request, response) {

    var ms = request.session.data['therapy']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-3/radio-buttons/therapy-or-medication")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-3/radio-buttons/sleep-problems-question")
    } 
})

router.post('/educational-professional-round-3/radio-buttons/sleep-problems-question', function(request, response) {

    var ms = request.session.data['sleep']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-3/radio-buttons/sleep-problems")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-3/radio-buttons/check-answers")
    } 
})

// EDUCATIONAL PROFESSIONAL ROUND 3 CHECKBOXES

router.post('/educational-professional-round-3/checkboxes/about-child', function(request, response) {

    var ms = request.session.data['live1']
    if (ms === "yesdirect"){
        response.redirect("/educational-professional-round-3/checkboxes/child-dob")
    } 
        if (ms === "yesbut"){
        response.redirect("/educational-professional-round-3/checkboxes/response-sent")
    } 
    else {
        response.redirect("/educational-professional-round-3//checkboxes/response-sent")
    }
})

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
router.post('/educational-professional-round-3/checkboxes/submit', (req, res) => {
  // Normalize options to an array
  const options = req.session.data['options'] = Array.isArray(req.body['options']) ? req.body['options'] : req.body['options'] ? [req.body['options']] : []

  // Redirect to error page if no options selected
  if (!options || options.length === 0) {
    return res.redirect('/educational-professional-round-3/checkboxes/provide-information-error')
  }

  // Store selected pages and initialize index
  req.session.data['selectedPages'] = options
  req.session.data['currentPageIndex'] = 0

  // Redirect to first selected page
  const firstPage = options.find(page => pageOrder.includes(page))
  if (!firstPage) {
    return res.redirect('/educational-professional-round-3/checkboxes/provide-information-error')
  }
  res.redirect(`/educational-professional-round-3/checkboxes/${firstPage}`)
})

// Page submissions
router.post('/educational-professional-round-3/checkboxes/submit-page1', (req, res) => {
  nextPage(req, res)
})

router.post('/educational-professional-round-3/checkboxes/submit-page2', (req, res) => {
  nextPage(req, res)
})

router.post('/educational-professional-round-3/checkboxes/submit-page3', (req, res) => {
  nextPage(req, res)
})

router.post('/educational-professional-round-3/checkboxes/submit-page4', (req, res) => {
  nextPage(req, res)
})

router.post('/educational-professional-round-3/checkboxes/submit-page5', (req, res) => {
  nextPage(req, res)
})

router.post('/educational-professional-round-3/checkboxes/submit-page6', (req, res) => {
  nextPage(req, res)
})

router.post('/educational-professional-round-3/checkboxes/submit-page7', (req, res) => {
  nextPage(req, res)
})


router.post('/educational-professional-round-3/checkboxes/submit-page8', (req, res) => {
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
    return res.redirect('/educational-professional-round-3/checkboxes/check-answers')
  }

  // Find the next selected page
  const nextPageIndex = currentPageIndex + 1
  const nextPage = selectedPages[nextPageIndex]

  if (nextPage && pageOrder.includes(nextPage)) {
    req.session.data['currentPageIndex'] = nextPageIndex
    res.redirect(`/educational-professional-round-3/checkboxes/${nextPage}`)
  } else {
    // Clear session data
    req.session.data['options'] = null
    req.session.data['selectedPages'] = null
    req.session.data['currentPageIndex'] = null
    res.redirect('/educational-professional-round-3/checkboxes/check-answers')
  }
}

// EDUCATIONAL PROFESSIONAL ROUND 4 

router.get('/choose-options', function (req, res) {
  res.render('choose-options');
});

router.post('/educational-professional-round-4/about-child', function(request, response) {

    var ms = request.session.data['6kno']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-4/child-dob")
    } 
        if (ms === "yesbut"){
        response.redirect("/educational-professional-round-4/check-answers-child")
    } 
    else {
        response.redirect("/educational-professional-round-4/check-answers-no-child")
    }
})

router.post('/educational-professional-round-4/learning-support-question', function(request, response) {

    var ms = request.session.data['support']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-4/additional-learning-support")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-4/behaviour-question")
    } 
})

router.post('/educational-professional-round-4/behaviour-question', function(request, response) {

    var ms = request.session.data['behaviour']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-4/behaviour-in-school")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-4/move-around-question")
    } 
})

router.post('/educational-professional-round-4/move-around-question', function(request, response) {

    var ms = request.session.data['move']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-4/move-around-school")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-4/personal-safety-question")
    } 
})

router.post('/educational-professional-round-4/personal-safety-question', function(request, response) {

    var ms = request.session.data['safety']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-4/personal-safety")  
    } 
        if (ms === "no"){ 
        response.redirect("/educational-professional-round-4/personal-care-question")
    } 
})

router.post('/educational-professional-round-4/personal-care-question', function(request, response) {

    var ms = request.session.data['care']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-4/personal-care") 
    } 
        if (ms === "no"){ 
        response.redirect("/educational-professional-round-4/therapy-or-medication-question")
    } 
})

router.post('/educational-professional-round-4/therapy-or-medication-question', function(request, response) {

    var ms = request.session.data['therapy']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-4/therapy-or-medication")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-4/sleep-problems-question")
    } 
})

router.post('/educational-professional-round-4/sleep-problems-question', function(request, response) {

    var ms = request.session.data['sleep']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-4/sleep-problems")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-4/individual-plans-question")
    } 
})

router.post('/educational-professional-round-4/individual-plans-question', function(request, response) {

    var ms = request.session.data['plan']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-4/individual-plans")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-4/check-answers")
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

// EDUCATIONAL PROFESSIONAL ROUND 5

router.get('/choose-options', function (req, res) {
  res.render('choose-options');
}); 

router.post('/educational-professional-round-5/about-child', function(request, response) {

    var ms = request.session.data['6kno']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-5/child-dob")
    } 
        if (ms === "yesbut"){
        response.redirect("/educational-professional-round-5/check-answers-child")
    } 
    else {
        response.redirect("/educational-professional-round-5/check-answers-no-child")
    }
})

router.post('/educational-professional-round-5/learning-support-question', function(request, response) {

    var ms = request.session.data['support']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-5/additional-learning-support")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-5/behaviour-question")
    } 
})

router.post('/educational-professional-round-5/behaviour-question', function(request, response) {

    var ms = request.session.data['behaviour']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-5/behaviour-in-school")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-5/move-around-question")
    } 
})

router.post('/educational-professional-round-5/move-around-question', function(request, response) {

    var ms = request.session.data['move']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-5/move-around-school")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-5/personal-safety-question")
    } 
})

router.post('/educational-professional-round-5/personal-safety-question', function(request, response) {

    var ms = request.session.data['safety']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-5/personal-safety")  
    } 
        if (ms === "no"){ 
        response.redirect("/educational-professional-round-5/personal-care-question")
    } 
})

router.post('/educational-professional-round-5/personal-care-question', function(request, response) {

    var ms = request.session.data['care']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-5/personal-care") 
    } 
        if (ms === "no"){ 
        response.redirect("/educational-professional-round-5/therapy-or-medication-question")
    } 
})

router.post('/educational-professional-round-5/therapy-or-medication-question', function(request, response) {

    var ms = request.session.data['therapy']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-5/therapy-or-medication")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-5/sleep-problems-question")
    } 
})

router.post('/educational-professional-round-5/sleep-problems-question', function(request, response) {

    var ms = request.session.data['sleep']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-5/sleep-problems")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-5/individual-plans-question")
    } 
})

router.post('/educational-professional-round-5/individual-plans-question', function(request, response) {

    var ms = request.session.data['plan']
    if (ms === "yes"){
        response.redirect("/educational-professional-round-5/individual-plans")
    } 
        if (ms === "no"){
        response.redirect("/educational-professional-round-5/check-answers")
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

