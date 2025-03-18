//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

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
