//
//  ViewControllerTest.swift
//  iOSTestTests
//
//  Created by Mac on 02/05/19.
//  Copyright © 2019 Mac. All rights reserved.
//

import XCTest
@testable import iOSTest
class ViewControllerTest: XCTestCase {
    var viewController:ViewController!
    override func setUp() {
        let storyBoard = UIStoryboard(name: "Main", bundle: nil)
        viewController = storyBoard.instantiateViewController(withIdentifier: "viewController") as! ViewController
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() {
        let c = viewController.sum(a: 2, b: 5)
        XCTAssertEqual(c, 7, "Failed")
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }
    
    func testEmail() {
        let b = viewController.isValidEmail(testStr: "test@hgh.com")
        XCTAssertEqual(b, true, "Passed")
    }

    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }

}
