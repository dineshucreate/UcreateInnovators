//
//  iOSTestTests.swift
//  iOSTestTests
//
//  Created by Mac on 02/05/19.
//  Copyright © 2019 Mac. All rights reserved.
//

import XCTest
@testable import iOSTest
class iOSTestTests: XCTestCase {
    private var objViewController:ViewController!
    override func setUp() {
        let storyboard = UIStoryboard(name: "Main", bundle: nil)
        objViewController = storyboard.instantiateViewController(withIdentifier: "viewController") as! ViewController
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }

    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
    }

    func testExample() {
        let c = objViewController.sum(a: 2, b: 4)
        XCTAssertEqual(c, 6, "Not equal")
        // This is an example of a functional test case.
        // Use XCTAssert and related functions to verify your tests produce the correct results.
    }

    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measure {
            // Put the code you want to measure the time of here.
        }
    }

}
