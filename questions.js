const questions = [
  {
    "id": 1,
    "question": "During helicopter maintenance inspection, which rotor system component primarily changes blade pitch to control lift and directional flight movement?",
    "options": [
      "Swashplate assembly",
      "Tail rotor gearbox",
      "Static mast support",
      "Engine accessory case"
    ],
    "answer": 0,
    "explanation": "The swashplate assembly transmits pilot control inputs to rotor blades, allowing cyclic and collective pitch adjustments necessary for helicopter flight control."
  },
  {
    "id": 2,
    "question": "Which statement best explains why compliance with Airworthiness Directives is mandatory before releasing an aircraft for flight?",
    "options": [
      "They provide optional manufacturer suggestions for performance improvement",
      "They identify legally required actions correcting unsafe aircraft conditions",
      "They apply only to commercial aircraft engines",
      "They replace all manufacturer maintenance manuals"
    ],
    "answer": 1,
    "explanation": "Airworthiness Directives are legally enforceable instructions issued to correct unsafe conditions affecting aircraft safety."
  },
  {
    "id": 3,
    "question": "While performing scheduled inspection on a piston aircraft engine, what condition would most likely indicate improper lubrication system performance?",
    "options": [
      "Stable oil temperature and pressure readings",
      "Excessive metal particles found in the oil filter element",
      "Consistent oil pressure during cruise power settings",
      "Normal oil consumption rates during operation"
    ],
    "answer": 1,
    "explanation": "Metal particles in oil filters often indicate abnormal engine wear or lubrication system malfunction."
  },
  {
    "id": 4,
    "question": "What is the primary aerodynamic purpose of the helicopter tail rotor during normal flight operations?",
    "options": [
      "Increase lift during vertical climb",
      "Counteract torque produced by the main rotor system",
      "Reduce drag on the fuselage structure",
      "Improve fuel efficiency during cruise flight"
    ],
    "answer": 1,
    "explanation": "The tail rotor counters torque created by the main rotor, maintaining directional stability and preventing uncontrolled rotation."
  },
  {
    "id": 5,
    "question": "When inspecting aircraft aluminum structures, which corrosion type commonly appears as white powdery deposits on exposed surfaces?",
    "options": [
      "Intergranular corrosion",
      "Exfoliation corrosion",
      "Surface oxidation corrosion",
      "Stress corrosion cracking"
    ],
    "answer": 2,
    "explanation": "Surface oxidation corrosion forms when aluminum reacts with oxygen, producing a powdery white residue."
  },
  {
    "id": 6,
    "question": "Which maintenance practice is most effective for preventing foreign object damage during aircraft maintenance operations?",
    "options": [
      "Increasing maintenance intervals",
      "Implementing strict tool control procedures",
      "Using only automated inspection systems",
      "Eliminating visual inspections"
    ],
    "answer": 1,
    "explanation": "Tool control programs help prevent tools or debris from remaining inside aircraft structures or systems."
  },
  {
    "id": 7,
    "question": "When reviewing aircraft maintenance records before releasing an aircraft for service, what must the AME verify regarding completed repairs?",
    "options": [
      "Only engine repairs require documentation",
      "All maintenance actions must be properly recorded and certified",
      "Only major structural repairs require signatures",
      "Logbooks are optional for private aircraft"
    ],
    "answer": 1,
    "explanation": "All maintenance work must be documented and signed by authorized personnel to maintain legal airworthiness."
  },
  {
    "id": 8,
    "question": "Which component in a turbine engine compresses incoming air before fuel combustion occurs inside the combustion chamber?",
    "options": [
      "Compressor section",
      "Exhaust nozzle",
      "Propeller governor",
      "Carburetor assembly"
    ],
    "answer": 0,
    "explanation": "The compressor increases air pressure before combustion, improving engine efficiency and power output."
  },
  {
    "id": 9,
    "question": "During aircraft electrical system troubleshooting, which component protects wiring circuits from overload or short-circuit damage?",
    "options": [
      "Alternator regulator",
      "Circuit breaker",
      "Static wick",
      "Magneto switch"
    ],
    "answer": 1,
    "explanation": "Circuit breakers interrupt electrical flow when excessive current occurs, preventing wiring damage."
  },
  {
    "id": 10,
    "question": "What is the most important purpose of performing blade tracking and balancing on a helicopter rotor system?",
    "options": [
      "Improve cabin interior lighting efficiency",
      "Reduce rotor vibration and structural stress",
      "Increase aircraft fuel capacity",
      "Prevent corrosion on rotor blades"
    ],
    "answer": 1,
    "explanation": "Proper blade tracking ensures smooth rotor operation and reduces vibration that can damage aircraft structures."
  },
  {
    "id": 11,
    "question": "Which aircraft structural design distributes loads across the skin and internal framework simultaneously during flight stresses?",
    "options": [
      "Truss structure design",
      "Semi-monocoque structure design",
      "Solid fuselage design",
      "Tubular frame design"
    ],
    "answer": 1,
    "explanation": "Semi-monocoque construction distributes loads through the skin and internal members such as frames and stringers."
  },
  {
    "id": 12,
    "question": "During maintenance troubleshooting, what is the primary benefit of following manufacturer fault-isolation procedures in aircraft manuals?",
    "options": [
      "They eliminate the need for inspections",
      "They guide technicians systematically toward the probable cause of system malfunctions",
      "They replace regulatory maintenance requirements",
      "They allow random component replacement"
    ],
    "answer": 1,
    "explanation": "Fault-isolation procedures help technicians efficiently locate and repair system defects."
  },
  {
    "id": 13,
    "question": "What aerodynamic principle explains how rotor blades produce lift as air flows faster over the curved upper blade surface?",
    "options": [
      "Bernoulli’s principle",
      "Pascal’s law",
      "Newton’s third law only",
      "Ohm’s law"
    ],
    "answer": 0,
    "explanation": "Bernoulli’s principle explains pressure differences between airflow over and under the blade that create lift."
  },
  {
    "id": 14,
    "question": "Which helicopter flight control allows the pilot to increase or decrease lift simultaneously on all rotor blades?",
    "options": [
      "Cyclic control",
      "Collective pitch control",
      "Tail rotor pedals",
      "Trim tab adjustment"
    ],
    "answer": 1,
    "explanation": "Collective pitch increases or decreases pitch on all blades simultaneously, controlling vertical lift."
  },
  {
    "id": 15,
    "question": "Which inspection technique allows technicians to detect cracks or internal defects without damaging the aircraft component?",
    "options": [
      "Chemical stripping",
      "Non-destructive testing methods",
      "Structural removal inspection",
      "Abrasive cutting procedures"
    ],
    "answer": 1,
    "explanation": "Non-destructive testing allows internal inspection without harming components."
  },
  {
    "id": 16,
    "question": "What is the primary purpose of aircraft hydraulic systems in larger helicopters and fixed- wing aircraft?",
    "options": [
      "Provide structural reinforcement",
      "Transmit power to operate landing gear, brakes, and flight control systems",
      "Reduce engine noise levels",
      "Store electrical energy"
    ],
    "answer": 1,
    "explanation": "Hydraulic systems transmit force for mechanical movement of aircraft components."
  },
  {
    "id": 17,
    "question": "When calculating aircraft weight and balance before flight, which factor most significantly affects aircraft stability and control?",
    "options": [
      "Cabin interior temperature",
      "Location of the center of gravity relative to allowable limits",
      "Paint color of the aircraft exterior",
      "Tire pressure variations"
    ],
    "answer": 1,
    "explanation": "Center of gravity placement affects aircraft stability and safe flight performance."
  },
  {
    "id": 18,
    "question": "Which engine ignition component generates high voltage required to ignite the fuel-air mixture in piston aircraft engines?",
    "options": [
      "Carburetor float assembly",
      "Magneto system",
      "Hydraulic pump",
      "Oil pressure regulator"
    ],
    "answer": 1,
    "explanation": "Magnetos generate high voltage for spark plugs independent of aircraft electrical systems."
  },
  {
    "id": 19,
    "question": "Why must aircraft wiring installations follow strict routing and protection standards during maintenance or repair?",
    "options": [
      "To improve cockpit aesthetics",
      "To prevent electrical shorts, overheating, and interference with moving parts",
      "To increase aircraft cruising speed",
      "To simplify aircraft repainting"
    ],
    "answer": 1,
    "explanation": "Proper wiring installation prevents electrical hazards and mechanical interference."
  },
  {
    "id": 20,
    "question": "What primary purpose does safety wiring serve when securing aircraft bolts or fasteners in critical systems?",
    "options": [
      "Improve electrical conductivity",
      "Prevent fasteners from loosening due to vibration",
      "Increase bolt tensile strength",
      "Provide insulation from electrical circuits"
    ],
    "answer": 1,
    "explanation": "Safety wire ensures fasteners remain secure during aircraft operation."
  },
  {
    "id": 21,
    "question": "What aerodynamic condition occurs when airflow separates from the wing or rotor blade surface, causing a rapid loss of lift?",
    "options": [
      "Autorotation",
      "Stall condition",
      "Dynamic stability",
      "Induced thrust"
    ],
    "answer": 1,
    "explanation": "A stall occurs when the angle of attack exceeds critical limits and airflow separates from the surface."
  },
  {
    "id": 22,
    "question": "Which maintenance documentation provides detailed procedures for performing routine inspections and repairs on specific aircraft systems?",
    "options": [
      "Aircraft Maintenance Manual",
      "Pilot Operating Handbook",
      "Airport operations manual",
      "Flight plan documentation"
    ],
    "answer": 0,
    "explanation": "The Aircraft Maintenance Manual contains approved maintenance procedures."
  },
  {
    "id": 23,
    "question": "During corrosion prevention procedures, which method is commonly used to protect aluminum aircraft structures from environmental damage?",
    "options": [
      "Electrical grounding systems",
      "Application of protective coatings and sealants",
      "Removing structural reinforcements",
      "Increasing engine power output"
    ],
    "answer": 1,
    "explanation": "Protective coatings prevent moisture and chemicals from damaging aircraft structures."
  },
  {
    "id": 24,
    "question": "What mechanical device regulates propeller blade angle automatically to maintain efficient engine RPM during flight?",
    "options": [
      "Propeller governor",
      "Carburetor heat control",
      "Fuel selector valve",
      "Magneto switch"
    ],
    "answer": 0,
    "explanation": "Propeller governors adjust blade pitch to maintain constant RPM."
  },
  {
    "id": 25,
    "question": "What is the primary benefit of implementing Safety Management Systems in aviation maintenance organizations?",
    "options": [
      "Reduce maintenance documentation",
      "Identify hazards and improve safety through proactive risk management",
      "Eliminate regulatory oversight requirements",
      "Replace aircraft inspection programs"
    ],
    "answer": 1,
    "explanation": "Safety Management Systems help organizations manage operational risk effectively."
  },
  {
    "id": 26,
    "question": "What helicopter flight condition allows the rotor system to continue turning during engine failure by airflow moving upward through the rotor?",
    "options": [
      "Dynamic rollover",
      "Autorotation",
      "Tail rotor stall",
      "Blade stall"
    ],
    "answer": 1,
    "explanation": "Autorotation allows helicopters to descend safely without engine power."
  },
  {
    "id": 27,
    "question": "Which landing gear component absorbs impact loads during aircraft landing operations?",
    "options": [
      "Static wick assembly",
      "Shock strut or oleo strut",
      "Fuel injector nozzle",
      "Pitot tube assembly"
    ],
    "answer": 1,
    "explanation": "Shock struts absorb landing forces and protect aircraft structure."
  },
  {
    "id": 28,
    "question": "What is the primary function of aircraft fuel system boost pumps during engine operation?",
    "options": [
      "Increase aerodynamic lift",
      "Ensure adequate fuel pressure to the engine",
      "Reduce electrical system voltage",
      "Increase propeller blade pitch"
    ],
    "answer": 1,
    "explanation": "Boost pumps maintain fuel pressure for proper engine operation."
  },
  {
    "id": 29,
    "question": "Which factor most commonly contributes to maintenance-related human error during aircraft repair activities?",
    "options": [
      "Excessive cockpit instrumentation",
      "Fatigue, time pressure, or poor communication among technicians",
      "Proper use of maintenance manuals",
      "Regular training programs"
    ],
    "answer": 1,
    "explanation": "Human factors such as fatigue and miscommunication often lead to maintenance errors."
  },
  {
    "id": 30,
    "question": "What function does the aircraft alternator perform during normal engine operation?",
    "options": [
      "Generate electrical power for aircraft systems and recharge batteries",
      "Increase fuel pressure for combustion",
      "Stabilize aerodynamic lift during climb",
      "Control tail rotor pitch angle"
    ],
    "answer": 0,
    "explanation": "Alternators generate electrical power and recharge aircraft batteries."
  },
  {
    "id": 31,
    "question": "During inspection of a helicopter tail rotor assembly, which condition would require immediate maintenance action before the aircraft can be returned to service?",
    "options": [
      "Slight cosmetic paint discoloration on rotor blade surface",
      "Excessive play in the tail rotor pitch control linkage system",
      "Minor dust accumulation on the rotor hub assembly",
      "Slight vibration during ground engine idle operation"
    ],
    "answer": 1,
    "explanation": "Excessive play in pitch control linkages can compromise directional control, making the aircraft unsafe for flight."
  },
  {
    "id": 32,
    "question": "When performing corrosion inspection on aircraft aluminum skin panels, which environmental factor most commonly accelerates corrosion formation?",
    "options": [
      "Low atmospheric humidity and cold temperature",
      "Exposure to moisture, salt contamination, and pollutants",
      "Increased cabin pressurization levels",
      "Reduced aerodynamic drag on the fuselage"
    ],
    "answer": 1,
    "explanation": "Moisture and salt promote electrochemical reactions that accelerate corrosion on aluminum aircraft structures."
  },
  {
    "id": 33,
    "question": "Which turbine engine component mixes compressed air with fuel and ignites the mixture to generate expanding gases for power production?",
    "options": [
      "Compressor stage assembly",
      "Combustion chamber section",
      "Exhaust diffuser cone",
      "Reduction gearbox assembly"
    ],
    "answer": 1,
    "explanation": "The combustion chamber burns the air-fuel mixture, producing high-energy gases that drive turbine stages."
  },
  {
    "id": 34,
    "question": "During maintenance of a helicopter rotor head assembly, which component transmits pilot cyclic control inputs to change blade pitch during rotation?",
    "options": [
      "Static mast support",
      "Swashplate assembly",
      "Tail rotor gearbox",
      "Rotor blade tip cap"
    ],
    "answer": 1,
    "explanation": "The swashplate transfers cyclic and collective control movements to the rotor blades."
  },
  {
    "id": 35,
    "question": "What is the primary purpose of performing torque checks on aircraft fasteners during scheduled maintenance inspections?",
    "options": [
      "Improve aircraft aerodynamic efficiency",
      "Ensure fasteners maintain correct clamping force to prevent loosening",
      "Reduce electrical resistance in structural components",
      "Increase aircraft cruising speed capability"
    ],
    "answer": 1,
    "explanation": "Proper torque ensures fasteners maintain structural integrity and resist vibration- induced loosening."
  },
  {
    "id": 36,
    "question": "Which aircraft electrical component converts mechanical engine power into electrical energy used by onboard systems?",
    "options": [
      "Alternator or generator assembly",
      "Static discharge wick",
      "Fuel boost pump",
      "Hydraulic pressure accumulator"
    ],
    "answer": 0,
    "explanation": "Alternators generate electrical power and maintain battery charge during aircraft operation."
  },
  {
    "id": 37,
    "question": "During aircraft fuel system inspection, which condition could indicate contamination that may cause engine performance problems?",
    "options": [
      "Clear fuel sample with no visible debris",
      "Presence of water droplets or sediment in fuel sample",
      "Stable fuel pressure during engine operation",
      "Consistent fuel flow readings in cruise flight"
    ],
    "answer": 1,
    "explanation": "Water or debris contamination can interrupt combustion and damage engine components."
  },
  {
    "id": 38,
    "question": "Which aerodynamic factor increases when rotor blades operate at higher angles of attack during helicopter flight?",
    "options": [
      "Induced drag created by lift production",
      "Static electricity buildup on the fuselage",
      "Hydraulic pressure inside control systems",
      "Electrical resistance in navigation systems"
    ],
    "answer": 0,
    "explanation": "Higher angles of attack increase lift but also increase induced drag."
  },
  {
    "id": 39,
    "question": "What maintenance action should an AME take when discovering a crack in a primary aircraft structural component during inspection?",
    "options": [
      "Ignore the crack if it appears small and non-propagating",
      "Document the defect and repair according to approved structural repair procedures",
      "Apply temporary adhesive sealant without documentation",
      "Continue operating the aircraft until next inspection interval"
    ],
    "answer": 1,
    "explanation": "Structural cracks must be documented and repaired according to approved maintenance procedures."
  },
  {
    "id": 40,
    "question": "Which component in a piston engine distributes high-voltage electrical current from the magneto to the appropriate spark plug?",
    "options": [
      "Ignition distributor assembly",
      "Hydraulic accumulator valve",
      "Exhaust manifold assembly",
      "Carburetor throttle plate"
    ],
    "answer": 0,
    "explanation": "The ignition distributor directs high voltage from the magneto to individual spark plugs."
  },
  {
    "id": 41,
    "question": "During aircraft weight and balance calculations, what could occur if the center of gravity is located significantly behind the approved limit?",
    "options": [
      "Increased aircraft structural strength",
      "Reduced aircraft controllability and potential instability",
      "Improved fuel efficiency during cruise",
      "Increased landing gear durability"
    ],
    "answer": 1,
    "explanation": "An aft center of gravity can cause instability and difficulty controlling aircraft pitch."
  },
  {
    "id": 42,
    "question": "What is the primary function of aircraft landing gear braking systems during ground operations?",
    "options": [
      "Increase aerodynamic lift during takeoff",
      "Slow or stop aircraft movement safely during landing or taxi operations",
      "Regulate engine thrust output",
      "Control cabin pressurization levels"
    ],
    "answer": 1,
    "explanation": "Brake systems provide controlled deceleration during landing and taxiing."
  },
  {
    "id": 43,
    "question": "Which aircraft system commonly uses hydraulic pressure to operate retractable landing gear and flight control surfaces?",
    "options": [
      "Hydraulic power system",
      "Electrical avionics system",
      "Static pressure system",
      "Pneumatic cabin ventilation system"
    ],
    "answer": 0,
    "explanation": "Hydraulic systems transmit force efficiently for heavy mechanical operations."
  },
  {
    "id": 44,
    "question": "What is the most important purpose of reviewing aircraft technical logbooks before performing maintenance tasks?",
    "options": [
      "Identify previous defects, maintenance history, and outstanding discrepancies",
      "Confirm pilot flight hours for licensing requirements",
      "Calculate aircraft aerodynamic efficiency",
      "Determine passenger seating capacity"
    ],
    "answer": 0,
    "explanation": "Maintenance records provide essential information about aircraft condition and prior repairs."
  },
  {
    "id": 45,
    "question": "Which factor most commonly contributes to dynamic rollover accidents in helicopters during ground operations?",
    "options": [
      "Excessive engine oil pressure during startup",
      "Uneven ground contact combined with excessive lateral cyclic control input",
      "High electrical voltage in aircraft battery system",
      "Excessive tail rotor RPM during hover"
    ],
    "answer": 1,
    "explanation": "Dynamic rollover occurs when rolling motion exceeds recovery capability."
  },
  {
    "id": 46,
    "question": "During inspection of aircraft electrical wiring bundles, what condition would indicate potential fire hazard requiring corrective maintenance?",
    "options": [
      "Properly secured wiring harnesses with protective insulation",
      "Frayed insulation or exposed wiring conductors",
      "Correct routing away from moving components",
      "Secure electrical connectors with locking devices"
    ],
    "answer": 1,
    "explanation": "Exposed wires may short circuit and cause electrical fires."
  },
  {
    "id": 47,
    "question": "Which aerodynamic principle states that for every action force applied by a rotor blade on the air, an equal and opposite reaction force occurs?",
    "options": [
      "Newton’s Third Law of Motion",
      "Bernoulli’s Principle",
      "Ohm’s Electrical Law",
      "Pascal’s Hydraulic Law"
    ],
    "answer": 0,
    "explanation": "Newton’s third law explains how rotor blades push air downward to produce lift."
  },
  {
    "id": 48,
    "question": "Which aircraft documentation provides illustrated diagrams and part numbers for ordering replacement components during maintenance?",
    "options": [
      "Illustrated Parts Catalogue (IPC)",
      "Flight Operations Manual",
      "Airport Operations Guide",
      "Weather Service Handbook"
    ],
    "answer": 0,
    "explanation": "The IPC contains detailed parts diagrams and identification numbers for aircraft components."
  },
  {
    "id": 49,
    "question": "Why is proper torque application especially critical when installing components in aircraft engine assemblies?",
    "options": [
      "To improve electrical system voltage stability",
      "To prevent component failure caused by over-tightening or insufficient clamping force",
      "To reduce aerodynamic drag on the aircraft fuselage",
      "To increase aircraft range during cruise flight"
    ],
    "answer": 1,
    "explanation": "Incorrect torque can cause structural damage or fastener loosening."
  },
  {
    "id": 50,
    "question": "What is the primary purpose of implementing fatigue management practices in aviation maintenance organizations?",
    "options": [
      "Increase aircraft fuel efficiency",
      "Reduce maintenance errors caused by technician fatigue and impaired decision-making",
      "Improve aircraft aerodynamic performance",
      "Eliminate the need for scheduled inspections"
    ],
    "answer": 1,
    "explanation": "Fatigue management improves technician performance and reduces safety risks."
  },
  {
    "id": 51,
    "question": "During inspection of a helicopter rotor blade, which condition would most likely indicate structural damage requiring immediate repair or replacement?",
    "options": [
      "Minor paint fading caused by ultraviolet exposure",
      "Visible crack extending across the rotor blade skin or spar structure",
      "Slight accumulation of dust near blade root area",
      "Normal wear marks on blade leading edge protection strip"
    ],
    "answer": 1,
    "explanation": "Structural cracks in rotor blades can rapidly propagate during flight loads and pose a severe safety hazard."
  },
  {
    "id": 52,
    "question": "What is the primary purpose of an aircraft fuel filter installed in the fuel delivery system between the tank and engine?",
    "options": [
      "Increase fuel pressure entering the engine cylinders",
      "Remove contaminants or debris that could damage engine components",
      "Improve aircraft electrical power generation",
      "Reduce aerodynamic drag during high-speed flight"
    ],
    "answer": 1,
    "explanation": "Fuel filters remove contaminants such as dirt, rust, or water that could block fuel flow or damage engine components."
  },
  {
    "id": 53,
    "question": "Which maintenance procedure ensures rotor blades move in the same rotational plane during helicopter flight operations?",
    "options": [
      "Blade feathering adjustment",
      "Rotor blade tracking procedure",
      "Magneto timing adjustment",
      "Hydraulic system pressure calibration"
    ],
    "answer": 1,
    "explanation": "Blade tracking ensures all rotor blades follow the same path, reducing vibration and improving flight stability."
  },
  {
    "id": 54,
    "question": "What is the primary role of aircraft pneumatic systems in certain aircraft configurations?",
    "options": [
      "Provide mechanical power for landing gear operation",
      "Supply compressed air for systems such as de-icing or cabin pressurization",
      "Generate electrical current for avionics equipment",
      "Increase aerodynamic lift during climb performance"
    ],
    "answer": 1,
    "explanation": "Pneumatic systems use compressed air for functions including de-icing, environmental control, and pressurization."
  },
  {
    "id": 55,
    "question": "During inspection of aircraft sheet metal structures, which defect typically results from repeated cyclic stresses over time?",
    "options": [
      "Static pressure imbalance",
      "Metal fatigue cracking",
      "Electrical insulation failure",
      "Fuel contamination"
    ],
    "answer": 1,
    "explanation": "Fatigue cracking develops from repeated stress cycles during aircraft operation."
  },
  {
    "id": 56,
    "question": "Which aircraft maintenance practice ensures that replacement parts installed during repairs meet manufacturer specifications?",
    "options": [
      "Installing generic components without documentation",
      "Verifying part numbers using the Illustrated Parts Catalogue",
      "Using visually similar components from other aircraft models",
      "Selecting parts based on technician preference"
    ],
    "answer": 1,
    "explanation": "The Illustrated Parts Catalogue ensures the correct approved parts are installed."
  },
  {
    "id": 57,
    "question": "Which helicopter control input allows the pilot to tilt the rotor disc in a specific direction to control forward, backward, or lateral movement?",
    "options": [
      "Collective pitch lever",
      "Cyclic control stick",
      "Tail rotor pedal assembly",
      "Throttle twist grip"
    ],
    "answer": 1,
    "explanation": "Cyclic control changes blade pitch during rotation, tilting the rotor disc and controlling direction."
  },
  {
    "id": 58,
    "question": "What is the primary purpose of performing periodic magneto timing checks on piston aircraft engines during maintenance?",
    "options": [
      "Ensure spark ignition occurs at the correct moment for efficient combustion",
      "Increase electrical output of aircraft alternator systems",
      "Reduce aircraft aerodynamic drag during flight",
      "Prevent excessive fuel evaporation inside fuel tanks"
    ],
    "answer": 0,
    "explanation": "Proper magneto timing ensures optimal combustion efficiency and engine performance."
  },
  {
    "id": 59,
    "question": "Which aircraft maintenance factor most directly affects the reliability and safety of hydraulic system operations?",
    "options": [
      "Correct hydraulic fluid level and absence of contamination",
      "Color of hydraulic system reservoir cap",
      "Shape of aircraft exterior paint markings",
      "Cabin lighting brightness"
    ],
    "answer": 0,
    "explanation": "Hydraulic systems require proper fluid levels and clean fluid to operate effectively."
  },
  {
    "id": 60,
    "question": "What aerodynamic effect occurs when an aircraft wing or rotor blade produces lift and generates swirling air patterns at its tips?",
    "options": [
      "Static electricity discharge",
      "Wingtip vortices formation",
      "Magneto ignition timing shift",
      "Hydraulic pressure oscillation"
    ],
    "answer": 1,
    "explanation": "Wingtip vortices result from pressure differences between upper and lower wing surfaces."
  },
  {
    "id": 61,
    "question": "When reviewing aircraft maintenance documentation, what does a signed maintenance release certify by an AME?",
    "options": [
      "The aircraft is approved for passenger boarding only",
      "Maintenance work performed complies with regulations and aircraft is airworthy",
      "The aircraft has completed at least one flight since maintenance",
      "Fuel quantity has been verified by the pilot"
    ],
    "answer": 1,
    "explanation": "Maintenance release certifies the aircraft meets regulatory airworthiness requirements."
  },
  {
    "id": 62,
    "question": "Which aircraft component absorbs and dissipates landing impact forces to protect the fuselage structure?",
    "options": [
      "Static port assembly",
      "Oleo or shock strut in the landing gear system",
      "Tail rotor gearbox",
      "Electrical inverter"
    ],
    "answer": 1,
    "explanation": "Shock struts absorb landing forces and prevent structural damage."
  },
  {
    "id": 63,
    "question": "During aircraft electrical troubleshooting, which tool is most commonly used to measure voltage, resistance, and electrical continuity?",
    "options": [
      "Torque wrench",
      "Multimeter testing instrument",
      "Rivet gun tool",
      "Hydraulic pressure tester"
    ],
    "answer": 1,
    "explanation": "Multimeters measure electrical properties used in diagnosing electrical faults."
  },
  {
    "id": 64,
    "question": "Which condition is most likely to cause overheating in an aircraft piston engine during prolonged operation?",
    "options": [
      "Proper lubrication system functioning",
      "Insufficient cooling airflow or blocked cooling fins",
      "Normal engine RPM settings",
      "Correct fuel mixture adjustment"
    ],
    "answer": 1,
    "explanation": "Blocked cooling passages prevent heat dissipation from the engine."
  },
  {
    "id": 65,
    "question": "What maintenance procedure is required when an aircraft component reaches its manufacturer-specified service life limit?",
    "options": [
      "Continue operating until visible damage appears",
      "Replace or overhaul the component according to approved maintenance requirements",
      "Reduce aircraft cruising altitude",
      "Increase lubrication frequency only"
    ],
    "answer": 1,
    "explanation": "Components with life limits must be replaced or overhauled to maintain safety."
  },
  {
    "id": 66,
    "question": "Which aerodynamic force directly opposes aircraft motion through the air during flight?",
    "options": [
      "Lift force",
      "Drag force",
      "Thrust force",
      "Weight force"
    ],
    "answer": 1,
    "explanation": "Drag resists forward motion of the aircraft through the air."
  },
  {
    "id": 67,
    "question": "What is the primary function of aircraft static wicks installed on trailing edges of wings and control surfaces?",
    "options": [
      "Improve aerodynamic lift production",
      "Dissipate static electricity buildup during flight",
      "Increase fuel efficiency at high altitude",
      "Control tail rotor pitch angle"
    ],
    "answer": 1,
    "explanation": "Static wicks safely discharge accumulated electrical charges."
  },
  {
    "id": 68,
    "question": "During helicopter maintenance inspection, which component transfers engine power to the main rotor system?",
    "options": [
      "Main transmission gearbox assembly",
      "Static pressure port",
      "Cabin ventilation system",
      "Alternator voltage regulator"
    ],
    "answer": 0,
    "explanation": "The transmission converts engine output into rotor rotation."
  },
  {
    "id": 69,
    "question": "Which aircraft system provides pressurized fluid power used to operate heavy mechanical components such as landing gear and brakes?",
    "options": [
      "Electrical distribution system",
      "Hydraulic power system",
      "Pneumatic ventilation system",
      "Static air pressure system"
    ],
    "answer": 1,
    "explanation": "Hydraulic systems use fluid pressure to operate mechanical components."
  },
  {
    "id": 70,
    "question": "Which inspection practice helps technicians detect early signs of corrosion or fatigue before they become severe structural problems?",
    "options": [
      "Routine visual inspections combined with non-destructive testing methods",
      "Ignoring minor structural surface irregularities",
      "Increasing aircraft cruise speed",
      "Reducing inspection frequency intervals"
    ],
    "answer": 0,
    "explanation": "Early detection through inspection prevents structural failures."
  },
  {
    "id": 71,
    "question": "Which factor most commonly contributes to maintenance errors involving installation of incorrect aircraft parts?",
    "options": [
      "Strict adherence to maintenance manuals",
      "Failure to verify part numbers against technical documentation",
      "Proper technician training",
      "Organized maintenance facilities"
    ],
    "answer": 1,
    "explanation": "Incorrect parts often result from failing to confirm part numbers."
  },
  {
    "id": 72,
    "question": "Which engine system supplies pressurized oil to lubricate moving internal components and reduce friction during operation?",
    "options": [
      "Engine lubrication system",
      "Ignition timing system",
      "Static pressure system",
      "Fuel evaporation system"
    ],
    "answer": 0,
    "explanation": "Lubrication systems minimize friction and wear inside engines."
  },
  {
    "id": 73,
    "question": "What aerodynamic condition occurs when airflow separates from the upper wing surface due to excessive angle of attack?",
    "options": [
      "Autorotation",
      "Stall condition",
      "Static discharge",
      "Magnetic interference"
    ],
    "answer": 1,
    "explanation": "Stalls occur when airflow separates, drastically reducing lift."
  },
  {
    "id": 74,
    "question": "What is the primary purpose of maintenance safety training programs in aviation organizations?",
    "options": [
      "Reduce aircraft manufacturing costs",
      "Ensure technicians follow safe procedures and minimize workplace accidents",
      "Increase aircraft cruising speeds",
      "Reduce pilot training requirements"
    ],
    "answer": 1,
    "explanation": "Safety training helps technicians prevent accidents and errors."
  },
  {
    "id": 75,
    "question": "During fuel system inspection, which device measures the amount of fuel remaining in aircraft tanks?",
    "options": [
      "Fuel quantity indicator system",
      "Static discharge wick",
      "Hydraulic accumulator valve",
      "Cabin pressure regulator"
    ],
    "answer": 0,
    "explanation": "Fuel quantity indicators display tank fuel levels to the cockpit."
  },
  {
    "id": 76,
    "question": "What structural feature strengthens aircraft wings by distributing aerodynamic loads across internal members?",
    "options": [
      "Wing spars and ribs structure",
      "Static pressure tubing",
      "Electrical circuit breakers",
      "Cabin temperature sensors"
    ],
    "answer": 0,
    "explanation": "Spars and ribs support wing loads during flight."
  },
  {
    "id": 77,
    "question": "Which factor most significantly influences helicopter hover performance capability?",
    "options": [
      "Rotor blade lift efficiency and available engine power",
      "Aircraft paint condition",
      "Cabin lighting brightness",
      "Passenger seat configuration"
    ],
    "answer": 0,
    "explanation": "Hover requires sufficient lift and engine power."
  },
  {
    "id": 78,
    "question": "Which aircraft maintenance document provides step-by-step procedures for performing repairs and system inspections?",
    "options": [
      "Aircraft Maintenance Manual (AMM)",
      "Airport operations manual",
      "Passenger safety briefing guide",
      "Airline route planning handbook"
    ],
    "answer": 0,
    "explanation": "AMMs contain official procedures for maintenance work."
  },
  {
    "id": 79,
    "question": "What condition most commonly indicates improper rotor blade balance in helicopters during flight testing?",
    "options": [
      "Excessive vibration felt throughout the airframe",
      "Improved aircraft climb performance",
      "Reduced fuel consumption rate",
      "Increased cabin pressurization"
    ],
    "answer": 0,
    "explanation": "Unbalanced blades cause vibrations affecting structural integrity."
  },
  {
    "id": 80,
    "question": "What is the primary purpose of aircraft circuit protection devices such as fuses or circuit breakers?",
    "options": [
      "Increase electrical power generation",
      "Prevent electrical system damage caused by excessive current flow",
      "Improve avionics display brightness",
      "Control hydraulic pump speed"
    ],
    "answer": 1,
    "explanation": "Circuit protection devices prevent overheating and wiring damage."
  },
  {
    "id": 81,
    "question": "Which aircraft maintenance factor directly contributes to preventing foreign object damage inside engines or mechanical systems?",
    "options": [
      "Strict tool accountability and workspace cleanliness",
      "Increased engine operating temperatures",
      "Reduced maintenance documentation",
      "Higher aircraft cruising altitude"
    ],
    "answer": 0,
    "explanation": "Tool control programs prevent debris entering aircraft systems."
  },
  {
    "id": 82,
    "question": "Which engine component controls fuel flow into the combustion chamber to regulate power output in turbine engines?",
    "options": [
      "Fuel control unit system",
      "Wing spar assembly",
      "Static pressure sensor",
      "Landing gear actuator"
    ],
    "answer": 0,
    "explanation": "Fuel control units regulate fuel delivery to maintain engine performance."
  },
  {
    "id": 83,
    "question": "Which maintenance action should be taken if hydraulic fluid contamination is discovered during inspection?",
    "options": [
      "Ignore contamination until next maintenance interval",
      "Drain, flush, and refill the system with approved fluid while replacing filters",
      "Increase hydraulic pressure to compensate",
      "Reduce aircraft airspeed during flight"
    ],
    "answer": 1,
    "explanation": "Contaminated hydraulic fluid can damage system components."
  },
  {
    "id": 84,
    "question": "Which aerodynamic force acts perpendicular to airflow and supports the aircraft in flight?",
    "options": [
      "Lift force",
      "Drag force",
      "Weight force",
      "Friction force"
    ],
    "answer": 0,
    "explanation": "Lift counters weight and keeps the aircraft airborne."
  },
  {
    "id": 85,
    "question": "Which maintenance inspection method uses dye penetrant or magnetic particles to reveal small cracks on metal surfaces?",
    "options": [
      "Non-destructive testing procedures",
      "Aerodynamic stress testing",
      "Fuel flow calibration",
      "Electrical resistance testing"
    ],
    "answer": 0,
    "explanation": "NDT methods reveal defects without damaging the component."
  },
  {
    "id": 86,
    "question": "Which factor must an AME verify before signing a maintenance release following completion of repairs?",
    "options": [
      "Aircraft maintenance work complies with regulations and manufacturer procedures",
      "Aircraft has completed at least one test flight",
      "Passenger cabin seats are fully occupied",
      "Fuel tanks are completely full"
    ],
    "answer": 0,
    "explanation": "Certification confirms compliance and airworthiness."
  },
  {
    "id": 87,
    "question": "Which aircraft instrument provides pilots with information about the aircraft’s vertical speed or rate of climb and descent?",
    "options": [
      "Vertical speed indicator instrument",
      "Airspeed indicator gauge",
      "Magnetic compass",
      "Fuel pressure gauge"
    ],
    "answer": 0,
    "explanation": "The VSI measures rate of climb or descent."
  },
  {
    "id": 88,
    "question": "Which factor most directly affects helicopter anti-torque control during hover operations?",
    "options": [
      "Tail rotor thrust produced by adjustable blade pitch",
      "Wing flap position",
      "Aircraft fuselage paint condition",
      "Cabin pressurization system"
    ],
    "answer": 0,
    "explanation": "Tail rotor thrust counteracts main rotor torque."
  },
  {
    "id": 89,
    "question": "Which maintenance practice improves aircraft reliability by identifying and correcting problems before failure occurs?",
    "options": [
      "Preventive maintenance and scheduled inspections",
      "Ignoring minor irregularities",
      "Eliminating maintenance documentation",
      "Operating aircraft continuously without inspections"
    ],
    "answer": 0,
    "explanation": "Preventive maintenance reduces failure risk."
  },
  {
    "id": 90,
    "question": "Which engine system mixes fuel with incoming air before combustion in many piston aircraft engines?",
    "options": [
      "Carburetor or fuel injection system",
      "Hydraulic pressure regulator",
      "Static pressure sensor",
      "Landing gear actuator"
    ],
    "answer": 0,
    "explanation": "Carburetors or injectors create the combustible mixture."
  },
  {
    "id": 91,
    "question": "What is the main purpose of safety management systems in aviation maintenance organizations?",
    "options": [
      "Increase airline ticket revenue",
      "Identify hazards and improve safety through structured risk management processes",
      "Eliminate aircraft inspection programs",
      "Replace maintenance technician training"
    ],
    "answer": 1,
    "explanation": "SMS focuses on proactive safety management."
  },
  {
    "id": 92,
    "question": "Which aerodynamic principle explains how faster airflow over a curved wing surface lowers pressure and contributes to lift generation?",
    "options": [
      "Bernoulli’s principle of fluid dynamics",
      "Ohm’s law of electrical resistance",
      "Pascal’s hydraulic law",
      "Newton’s law of gravity"
    ],
    "answer": 0,
    "explanation": "Bernoulli’s principle explains pressure differences that help create lift."
  },
  {
    "id": 93,
    "question": "Which aircraft documentation contains detailed diagrams showing routing of electrical wiring systems?",
    "options": [
      "Aircraft wiring diagram manual",
      "Passenger safety card",
      "Flight itinerary schedule",
      "Airport operations guide"
    ],
    "answer": 0,
    "explanation": "Wiring diagrams show electrical system layouts."
  },
  {
    "id": 94,
    "question": "Which factor most significantly affects aircraft takeoff performance capability?",
    "options": [
      "Weight, runway length, and available engine thrust",
      "Aircraft paint design",
      "Cabin lighting brightness",
      "Passenger entertainment systems"
    ],
    "answer": 0,
    "explanation": "Takeoff performance depends on weight, thrust, and runway length."
  },
  {
    "id": 95,
    "question": "Which condition would most likely indicate improper rigging of aircraft flight control surfaces?",
    "options": [
      "Control surfaces move smoothly with correct alignment",
      "Uneven or restricted movement during control input checks",
      "Proper lubrication of hinges",
      "Correct safety wire installation"
    ],
    "answer": 1,
    "explanation": "Restricted or uneven movement indicates incorrect rigging."
  },
  {
    "id": 96,
    "question": "Which aircraft maintenance practice ensures accurate tightening of bolts to manufacturer specifications?",
    "options": [
      "Using a calibrated torque wrench during installation",
      "Tightening bolts by hand estimation only",
      "Using generic hand tools without measurement",
      "Applying excessive force during installation"
    ],
    "answer": 0,
    "explanation": "Torque wrenches ensure correct fastener tension."
  },
  {
    "id": 97,
    "question": "Which rotorcraft aerodynamic principle explains how helicopters can descend safely without engine power during autorotation?",
    "options": [
      "Upward airflow through rotor blades maintains rotor rotation",
      "Electrical generators provide lift",
      "Static pressure changes create thrust",
      "Fuel systems generate aerodynamic lift"
    ],
    "answer": 0,
    "explanation": "Autorotation occurs when upward airflow drives the rotor."
  },
  {
    "id": 98,
    "question": "Which maintenance factor most strongly contributes to maintaining aircraft airworthiness over long operational periods?",
    "options": [
      "Consistent adherence to inspection schedules and maintenance procedures",
      "Increasing aircraft cruise speed",
      "Reducing documentation requirements",
      "Eliminating preventive maintenance"
    ],
    "answer": 0,
    "explanation": "Proper maintenance ensures continued airworthiness."
  },
  {
    "id": 99,
    "question": "Which aircraft component provides directional stability during forward flight in helicopters?",
    "options": [
      "Tail rotor and vertical stabilizer system",
      "Wing flap mechanism",
      "Cabin air conditioning unit",
      "Electrical inverter assembly"
    ],
    "answer": 0,
    "explanation": "Tail rotor thrust controls yaw and directional stability."
  },
  {
    "id": 100,
    "question": "What is the ultimate responsibility of a licensed Aircraft Maintenance Engineer when certifying an aircraft for return to service?",
    "options": [
      "Ensure all maintenance work complies with regulations and aircraft is safe for operation",
      "Confirm aircraft passenger capacity",
      "Approve airline flight schedules",
      "Determine ticket pricing for airline routes"
    ],
    "answer": 0,
    "explanation": "The AME’s certification confirms that maintenance meets regulatory standards and the aircraft is airworthy."
  },
  {
    "id": 101,
    "question": "During inspection of a helicopter main rotor hub assembly, which condition would most likely require immediate corrective maintenance action before further flight operations?",
    "options": [
      "Minor discoloration on protective paint coating of rotor hub",
      "Excessive wear or cracking detected in rotor hub attachment bolts",
      "Normal grease accumulation around lubrication fittings",
      "Slight vibration detected during ground idle operations"
    ],
    "answer": 1,
    "explanation": "Structural wear or cracks in rotor hub attachment components can lead to catastrophic rotor system failure."
  },
  {
    "id": 102,
    "question": "What is the primary purpose of aircraft engine cooling systems in piston-powered aircraft during extended flight operations?",
    "options": [
      "Maintain engine operating temperatures within safe limits to prevent overheating damage",
      "Increase aircraft electrical power generation capacity",
      "Improve aerodynamic lift produced by aircraft wings",
      "Reduce pilot workload during flight"
    ],
    "answer": 0,
    "explanation": "Cooling systems regulate engine temperature to prevent damage and maintain efficient operation."
  },
  {
    "id": 103,
    "question": "Which maintenance procedure helps detect hidden structural flaws in aircraft components without causing damage to the material itself?",
    "options": [
      "Mechanical stress testing",
      "Non-destructive testing methods such as ultrasonic or dye penetrant inspection",
      "Component disassembly for destructive examination",
      "High-temperature heat treatment procedures"
    ],
    "answer": 1,
    "explanation": "NDT techniques detect cracks or defects without harming aircraft structures."
  },
  {
    "id": 104,
    "question": "Which aerodynamic force acts directly opposite the thrust produced by aircraft engines during forward flight operations?",
    "options": [
      "Lift force generated by wings",
      "Drag force created by air resistance",
      "Weight force caused by gravity",
      "Centrifugal force generated during turns"
    ],
    "answer": 1,
    "explanation": "Drag opposes forward motion created by thrust."
  },
  {
    "id": 105,
    "question": "During maintenance troubleshooting of an aircraft electrical system, which instrument is most commonly used to verify voltage output from a generator or alternator?",
    "options": [
      "Multimeter electrical testing device",
      "Hydraulic pressure gauge",
      "Fuel flow indicator",
      "Airspeed calibration tester"
    ],
    "answer": 0,
    "explanation": "Multimeters measure voltage, resistance, and current in electrical circuits."
  },
  {
    "id": 106,
    "question": "What is the primary function of the helicopter collective pitch control lever during flight operations?",
    "options": [
      "Change rotor blade pitch simultaneously to increase or decrease lift",
      "Control directional yaw movement of the aircraft",
      "Regulate engine fuel mixture ratio automatically",
      "Adjust electrical output from the alternator"
    ],
    "answer": 0,
    "explanation": "Collective pitch changes blade angle simultaneously to control lift."
  },
  {
    "id": 107,
    "question": "Which aircraft structural component serves as the primary load-bearing member in most wing structures?",
    "options": [
      "Wing spar structural member",
      "Static pressure port",
      "Fuel quantity sensor",
      "Cabin temperature control unit"
    ],
    "answer": 0,
    "explanation": "Wing spars carry major aerodynamic loads."
  },
  {
    "id": 108,
    "question": "What is the most common cause of corrosion formation on aircraft structures operating in coastal environments?",
    "options": [
      "Exposure to salt moisture and humid atmospheric conditions",
      "Increased engine power output during takeoff",
      "High cabin pressurization levels",
      "Reduced aircraft cruising altitude"
    ],
    "answer": 0,
    "explanation": "Salt and humidity accelerate corrosion reactions."
  },
  {
    "id": 109,
    "question": "Which aircraft maintenance document provides step-by-step procedures for inspecting and repairing aircraft systems and components?",
    "options": [
      "Aircraft Maintenance Manual (AMM)",
      "Airport operations manual",
      "Passenger safety card",
      "Airline marketing guide"
    ],
    "answer": 0,
    "explanation": "The AMM contains approved maintenance procedures."
  },
  {
    "id": 110,
    "question": "Which condition would most likely indicate improper balance of helicopter rotor blades during operation?",
    "options": [
      "Noticeable vibration transmitted through the airframe during flight",
      "Reduced electrical system voltage output",
      "Increased cabin air conditioning efficiency",
      "Improved climb performance"
    ],
    "answer": 0,
    "explanation": "Unbalanced rotor blades create vibration and structural stress."
  },
  {
    "id": 111,
    "question": "What is the primary purpose of safety wiring fasteners installed in critical aircraft components during maintenance procedures?",
    "options": [
      "Increase electrical conductivity of metallic components",
      "Prevent fasteners from loosening due to vibration during operation",
      "Improve aircraft aerodynamic efficiency",
      "Reduce corrosion formation on structural parts"
    ],
    "answer": 1,
    "explanation": "Safety wire secures bolts against vibration loosening."
  },
  {
    "id": 112,
    "question": "Which aircraft fuel system component ensures fuel flows continuously to the engine even during high altitude operations?",
    "options": [
      "Fuel boost pump assembly",
      "Static pressure sensor",
      "Hydraulic accumulator valve",
      "Cabin ventilation fan"
    ],
    "answer": 0,
    "explanation": "Boost pumps maintain adequate fuel pressure to the engine."
  },
  {
    "id": 113,
    "question": "Which aerodynamic principle states that airflow velocity increases while pressure decreases across a curved surface generating lift?",
    "options": [
      "Bernoulli’s principle of fluid motion",
      "Newton’s law of gravity",
      "Ohm’s electrical law",
      "Pascal’s hydraulic law"
    ],
    "answer": 0,
    "explanation": "Bernoulli’s principle explains lift generation due to pressure differences."
  },
  {
    "id": 114,
    "question": "What maintenance action should be taken when a life-limited aircraft component reaches its manufacturer-specified operational limit?",
    "options": [
      "Continue operating until signs of damage appear",
      "Replace or overhaul the component according to approved maintenance schedules",
      "Increase lubrication frequency only",
      "Reduce aircraft cruise speed"
    ],
    "answer": 1,
    "explanation": "Life-limited components must be replaced or overhauled to ensure safety."
  },
  {
    "id": 115,
    "question": "Which aircraft system uses pressurized hydraulic fluid to move landing gear and braking mechanisms during flight operations?",
    "options": [
      "Hydraulic power system",
      "Static pressure system",
      "Electrical distribution system",
      "Fuel metering system"
    ],
    "answer": 0,
    "explanation": "Hydraulic systems operate heavy mechanical components."
  },
  {
    "id": 116,
    "question": "What is the main purpose of aircraft weight and balance calculations performed before flight operations?",
    "options": [
      "Ensure the aircraft center of gravity remains within approved operational limits",
      "Improve passenger seating comfort",
      "Increase engine thrust output",
      "Reduce aircraft paint wear"
    ],
    "answer": 0,
    "explanation": "Proper weight and balance ensure aircraft stability."
  },
  {
    "id": 117,
    "question": "Which aircraft system provides electrical power for avionics instruments and cockpit lighting during flight operations?",
    "options": [
      "Alternator or generator electrical system",
      "Fuel injection system",
      "Hydraulic braking system",
      "Rotor blade pitch system"
    ],
    "answer": 0,
    "explanation": "Alternators generate electrical power for onboard systems."
  },
  {
    "id": 118,
    "question": "Which helicopter aerodynamic condition occurs when the rotor system loses lift due to excessive angle of attack on rotor blades?",
    "options": [
      "Rotor blade stall condition",
      "Static pressure drop",
      "Hydraulic lock",
      "Electrical overload"
    ],
    "answer": 0,
    "explanation": "Blade stall reduces lift and can cause vibration."
  },
  {
    "id": 119,
    "question": "Which maintenance practice most effectively prevents foreign object damage inside aircraft engines during maintenance procedures?",
    "options": [
      "Maintaining strict tool accountability and workspace cleanliness",
      "Increasing engine idle speed",
      "Reducing inspection intervals",
      "Eliminating maintenance documentation"
    ],
    "answer": 0,
    "explanation": "Tool control programs prevent objects entering engines."
  },
  {
    "id": 120,
    "question": "What is the primary function of helicopter tail rotor pedals during flight operations?",
    "options": [
      "Control yaw direction by adjusting tail rotor blade pitch",
      "Adjust engine fuel mixture automatically",
      "Increase electrical system voltage",
      "Control cabin pressurization"
    ],
    "answer": 0,
    "explanation": "Pedals adjust tail rotor pitch to control yaw."
  },
  {
    "id": 121,
    "question": "Which aircraft instrument provides pilots with information about rate of climb or descent during flight?",
    "options": [
      "Vertical speed indicator instrument",
      "Magnetic compass",
      "Engine tachometer",
      "Fuel pressure gauge"
    ],
    "answer": 0,
    "explanation": "VSI shows vertical speed changes."
  },
  {
    "id": 122,
    "question": "Which engine system mixes fuel with incoming air before combustion in piston aircraft engines?",
    "options": [
      "Carburetor or fuel injection system",
      "Hydraulic fluid distribution system",
      "Electrical generation system",
      "Static air pressure system"
    ],
    "answer": 0,
    "explanation": "Fuel-air mixture is prepared by carburetors or injectors."
  },
  {
    "id": 123,
    "question": "What is the primary benefit of implementing preventive maintenance programs in aviation maintenance organizations?",
    "options": [
      "Reduce aircraft failure risks through early detection of potential problems",
      "Increase aircraft passenger capacity",
      "Improve aircraft paint durability",
      "Reduce pilot training requirements"
    ],
    "answer": 0,
    "explanation": "Preventive maintenance identifies issues before failure occurs."
  },
  {
    "id": 124,
    "question": "Which aircraft structural defect develops gradually due to repeated stress cycles during normal flight operations?",
    "options": [
      "Metal fatigue cracking",
      "Static electricity buildup",
      "Fuel evaporation",
      "Hydraulic leakage"
    ],
    "answer": 0,
    "explanation": "Fatigue cracks result from cyclic loading over time."
  },
  {
    "id": 125,
    "question": "What maintenance procedure ensures aircraft control surfaces move freely and correctly following repairs or adjustments?",
    "options": [
      "Flight control rigging and operational checks",
      "Increasing hydraulic pressure settings",
      "Reducing aircraft engine RPM",
      "Adjusting cabin air temperature"
    ],
    "answer": 0,
    "explanation": "Rigging checks confirm proper control movement."
  },
  {
    "id": 126,
    "question": "Which aerodynamic force acts perpendicular to airflow and supports the aircraft’s weight during flight?",
    "options": [
      "Lift force",
      "Drag force",
      "Thrust force",
      "Friction force"
    ],
    "answer": 0,
    "explanation": "Lift counters gravitational weight."
  },
  {
    "id": 127,
    "question": "Which aircraft maintenance document contains diagrams identifying parts and approved replacement components?",
    "options": [
      "Illustrated Parts Catalogue (IPC)",
      "Airport operations guide",
      "Passenger briefing card",
      "Airline scheduling manual"
    ],
    "answer": 0,
    "explanation": "IPC provides part identification and numbers."
  },
  {
    "id": 128,
    "question": "Which helicopter flight condition allows controlled descent without engine power through airflow driving rotor rotation?",
    "options": [
      "Autorotation maneuver",
      "Static hover condition",
      "Hydraulic boost operation",
      "Dynamic roll condition"
    ],
    "answer": 0,
    "explanation": "Autorotation allows safe descent after engine failure."
  },
  {
    "id": 129,
    "question": "Which factor most frequently contributes to human error in aircraft maintenance operations?",
    "options": [
      "Technician fatigue, time pressure, and poor communication",
      "Proper maintenance documentation",
      "Adequate training programs",
      "Organized maintenance facilities"
    ],
    "answer": 0,
    "explanation": "Human factors commonly cause maintenance mistakes."
  },
  {
    "id": 130,
    "question": "What is the primary function of aircraft circuit breakers within electrical distribution systems?",
    "options": [
      "Protect circuits from excessive current and electrical damage",
      "Increase electrical generation capacity",
      "Improve aerodynamic lift performance",
      "Regulate engine fuel mixture"
    ],
    "answer": 0,
    "explanation": "Circuit breakers interrupt electrical flow during overload."
  },
  {
    "id": 131,
    "question": "Which aircraft landing gear component absorbs impact loads during touchdown?",
    "options": [
      "Oleo or shock strut assembly",
      "Static discharge wick",
      "Hydraulic accumulator tank",
      "Fuel vent valve"
    ],
    "answer": 0,
    "explanation": "Shock struts absorb landing forces."
  },
  {
    "id": 132,
    "question": "Which aerodynamic effect forms swirling air currents behind wing tips due to pressure differences during lift generation?",
    "options": [
      "Wingtip vortices formation",
      "Static discharge buildup",
      "Hydraulic turbulence",
      "Fuel vaporization"
    ],
    "answer": 0,
    "explanation": "Wingtip vortices result from pressure differences around the wing."
  },
  {
    "id": 133,
    "question": "Which maintenance factor must an AME verify before signing a maintenance release certifying aircraft airworthiness?",
    "options": [
      "All maintenance tasks comply with regulatory and manufacturer requirements",
      "Aircraft fuel tanks are full",
      "Aircraft cabin seats are occupied",
      "Pilot flight hours are verified"
    ],
    "answer": 0,
    "explanation": "Certification confirms regulatory compliance."
  },
  {
    "id": 134,
    "question": "Which helicopter component transfers engine power from the engine to the rotor system?",
    "options": [
      "Main transmission gearbox",
      "Cabin air conditioning system",
      "Electrical inverter unit",
      "Fuel quantity sensor"
    ],
    "answer": 0,
    "explanation": "The transmission delivers power to the rotor."
  },
  {
    "id": 135,
    "question": "Which inspection technique uses fluorescent dye or magnetic particles to reveal cracks on metal surfaces?",
    "options": [
      "Non-destructive testing procedure",
      "Aerodynamic testing method",
      "Fuel flow testing procedure",
      "Electrical calibration test"
    ],
    "answer": 0,
    "explanation": "Dye penetrant and magnetic particle inspections reveal cracks."
  },
  {
    "id": 136,
    "question": "What aerodynamic force must be overcome by engine thrust for an aircraft to accelerate forward during flight?",
    "options": [
      "Drag force",
      "Lift force",
      "Weight force",
      "Centrifugal force"
    ],
    "answer": 0,
    "explanation": "Drag opposes thrust and motion."
  },
  {
    "id": 137,
    "question": "Which maintenance practice ensures fasteners are tightened precisely according to manufacturer specifications?",
    "options": [
      "Using a calibrated torque wrench during installation",
      "Tightening bolts using visual estimation only",
      "Applying maximum manual force",
      "Installing fasteners without measurement"
    ],
    "answer": 0,
    "explanation": "Torque wrenches ensure proper tension."
  },
  {
    "id": 138,
    "question": "Which aircraft system stores electrical energy to power systems during engine startup or alternator failure?",
    "options": [
      "Aircraft battery system",
      "Hydraulic pump assembly",
      "Tail rotor gearbox",
      "Fuel injection manifold"
    ],
    "answer": 0,
    "explanation": "Batteries provide backup electrical power."
  },
  {
    "id": 139,
    "question": "Which aerodynamic factor increases when an aircraft flies faster through the air causing greater air resistance?",
    "options": [
      "Drag force increases proportionally with speed",
      "Lift decreases to zero",
      "Weight decreases significantly",
      "Static electricity disappears"
    ],
    "answer": 0,
    "explanation": "Drag increases with airspeed."
  },
  {
    "id": 140,
    "question": "Which helicopter flight control is used primarily to control directional yaw movement during hover or forward flight?",
    "options": [
      "Tail rotor pedals",
      "Cyclic control stick",
      "Collective pitch lever",
      "Throttle control"
    ],
    "answer": 0,
    "explanation": "Pedals adjust tail rotor thrust."
  },
  {
    "id": 141,
    "question": "What is the primary purpose of aircraft corrosion prevention programs implemented during maintenance inspections?",
    "options": [
      "Prevent structural weakening caused by chemical reactions between metals and environmental elements",
      "Increase aircraft electrical generation capacity",
      "Improve cockpit instrument display brightness",
      "Reduce aircraft passenger seating capacity"
    ],
    "answer": 0,
    "explanation": "Corrosion weakens structural components if untreated."
  },
  {
    "id": 142,
    "question": "Which maintenance documentation records the history of repairs, inspections, and modifications performed on an aircraft?",
    "options": [
      "Aircraft technical logbook and maintenance records",
      "Passenger manifest record",
      "Airport weather report",
      "Airline marketing schedule"
    ],
    "answer": 0,
    "explanation": "Logbooks track aircraft maintenance history."
  },
  {
    "id": 143,
    "question": "Which aerodynamic principle explains lift generation through equal and opposite reaction when air is pushed downward by wings or rotor blades?",
    "options": [
      "Newton’s Third Law of Motion",
      "Ohm’s electrical law",
      "Pascal’s hydraulic law",
      "Boyle’s gas law"
    ],
    "answer": 0,
    "explanation": "Newton’s third law explains lift reaction forces."
  },
  {
    "id": 144,
    "question": "Which aircraft maintenance practice helps ensure long-term reliability of engine components during operation?",
    "options": [
      "Regular lubrication system inspection and oil analysis",
      "Increasing engine RPM during inspections",
      "Eliminating routine inspections",
      "Reducing maintenance documentation"
    ],
    "answer": 0,
    "explanation": "Oil analysis helps detect engine wear early."
  },
  {
    "id": 145,
    "question": "Which helicopter aerodynamic phenomenon may occur when airflow around rotor blades becomes disturbed during steep descent conditions?",
    "options": [
      "Vortex ring state condition",
      "Electrical discharge state",
      "Hydraulic stall state",
      "Fuel vaporization state"
    ],
    "answer": 0,
    "explanation": "Vortex ring state causes loss of lift in steep descents."
  },
  {
    "id": 146,
    "question": "Which aircraft maintenance factor most strongly influences the safety and reliability of flight operations?",
    "options": [
      "Strict compliance with maintenance procedures and regulatory standards",
      "Increasing aircraft exterior paint quality",
      "Adjusting passenger seating arrangement",
      "Reducing maintenance documentation"
    ],
    "answer": 0,
    "explanation": "Compliance ensures aircraft airworthiness."
  },
  {
    "id": 147,
    "question": "Which aircraft component measures and displays engine rotational speed to the pilot during flight operations?",
    "options": [
      "Tachometer instrument gauge",
      "Vertical speed indicator",
      "Magnetic compass",
      "Cabin pressure indicator"
    ],
    "answer": 0,
    "explanation": "Tachometers measure engine RPM."
  },
  {
    "id": 148,
    "question": "Which aircraft system regulates cabin air pressure and temperature for passenger comfort at high altitudes?",
    "options": [
      "Environmental control system",
      "Fuel injection system",
      "Hydraulic brake system",
      "Rotor blade pitch system"
    ],
    "answer": 0,
    "explanation": "Environmental systems maintain cabin conditions."
  },
  {
    "id": 149,
    "question": "Which maintenance action must be performed after completing major structural repairs to verify aircraft performance and safety?",
    "options": [
      "Conduct inspection and functional checks according to approved maintenance procedures",
      "Immediately return aircraft to commercial service",
      "Reduce aircraft cruising altitude permanently",
      "Increase engine operating speed"
    ],
    "answer": 0,
    "explanation": "Functional checks confirm repairs were successful."
  },
  {
    "id": 150,
    "question": "What is the ultimate responsibility of a licensed Aircraft Maintenance Engineer when approving an aircraft for return to service?",
    "options": [
      "Certify that all maintenance work complies with regulatory requirements and the aircraft is airworthy",
      "Schedule airline flight routes",
      "Determine passenger seating arrangements",
      "Calculate airline operating costs"
    ],
    "answer": 0,
    "explanation": "The AME ensures the aircraft meets safety and regulatory standards before release."
  },
  {
    "id": 151,
    "question": "During routine inspection of an aircraft hydraulic system, which condition would most likely indicate internal contamination requiring system servicing?",
    "options": [
      "Clean hydraulic fluid with proper pressure readings",
      "Darkened fluid with visible particles inside the reservoir",
      "Stable hydraulic pressure during operation",
      "Properly secured hydraulic fittings and lines"
    ],
    "answer": 1,
    "explanation": "Contaminated fluid containing debris can damage pumps, valves, and actuators."
  },
  {
    "id": 152,
    "question": "What is the primary function of the compressor section in a turbine engine used in many Category M aircraft?",
    "options": [
      "Increase air pressure before entering the combustion chamber",
      "Reduce engine exhaust temperature",
      "Generate electrical current for avionics equipment",
      "Control aircraft landing gear retraction speed"
    ],
    "answer": 0,
    "explanation": "Compressors increase air pressure for efficient combustion."
  },
  {
    "id": 153,
    "question": "Which aircraft structural inspection method uses ultrasonic waves to detect hidden internal cracks within metal components?",
    "options": [
      "Ultrasonic non-destructive testing technique",
      "Visual inspection procedure",
      "Electrical resistance testing",
      "Static pressure analysis"
    ],
    "answer": 0,
    "explanation": "Ultrasonic inspection detects subsurface structural flaws."
  },
  {
    "id": 154,
    "question": "Which aerodynamic force must be balanced by lift to maintain steady level flight conditions?",
    "options": [
      "Weight force produced by gravity",
      "Drag force from airflow resistance",
      "Thrust force from engines",
      "Centrifugal force during turns"
    ],
    "answer": 0,
    "explanation": "Lift must equal weight during level flight."
  },
  {
    "id": 155,
    "question": "What is the primary purpose of aircraft corrosion control programs implemented during regular maintenance inspections?",
    "options": [
      "Prevent structural damage caused by chemical reactions between metals and environmental elements",
      "Increase engine thrust during takeoff",
      "Improve aircraft cabin temperature control",
      "Reduce aircraft electrical power consumption"
    ],
    "answer": 0,
    "explanation": "Corrosion weakens aircraft structures and must be prevented."
  },
  {
    "id": 156,
    "question": "Which helicopter rotor control component changes blade pitch simultaneously on all blades to control vertical lift?",
    "options": [
      "Collective pitch control system",
      "Tail rotor pedal assembly",
      "Cyclic control stick",
      "Throttle twist grip"
    ],
    "answer": 0,
    "explanation": "Collective control changes pitch equally across rotor blades."
  },
  {
    "id": 157,
    "question": "Which aircraft system distributes electrical energy from generators or batteries to avionics, lighting, and other onboard equipment?",
    "options": [
      "Electrical power distribution system",
      "Hydraulic pressure system",
      "Fuel injection system",
      "Static air pressure system"
    ],
    "answer": 0,
    "explanation": "Electrical systems distribute power to aircraft components."
  },
  {
    "id": 158,
    "question": "What aerodynamic condition occurs when airflow separates from the wing surface due to excessive angle of attack?",
    "options": [
      "Stall condition resulting in rapid lift loss",
      "Static electrical discharge event",
      "Hydraulic system pressure loss",
      "Magneto ignition failure"
    ],
    "answer": 0,
    "explanation": "Stall occurs when airflow separation reduces lift."
  },
  {
    "id": 159,
    "question": "Which aircraft maintenance practice helps prevent foreign object damage inside engines and critical mechanical systems?",
    "options": [
      "Strict tool control and workplace cleanliness procedures",
      "Increasing engine idle RPM during inspections",
      "Reducing maintenance documentation",
      "Eliminating periodic inspections"
    ],
    "answer": 0,
    "explanation": "Tool control prevents objects from entering engines."
  },
  {
    "id": 160,
    "question": "Which helicopter component transmits engine power from the engine to the rotor system through mechanical gearing?",
    "options": [
      "Main transmission gearbox assembly",
      "Cabin ventilation system",
      "Static pressure port",
      "Electrical voltage regulator"
    ],
    "answer": 0,
    "explanation": "Transmission transfers engine power to rotors."
  },
  {
    "id": 161,
    "question": "Which aircraft maintenance document contains detailed diagrams and part numbers used for ordering replacement components?",
    "options": [
      "Illustrated Parts Catalogue (IPC)",
      "Passenger safety briefing card",
      "Airport operations manual",
      "Airline marketing brochure"
    ],
    "answer": 0,
    "explanation": "IPC identifies approved replacement parts."
  },
  {
    "id": 162,
    "question": "Which aerodynamic effect causes rotating airflow patterns behind aircraft wing tips during lift generation?",
    "options": [
      "Wingtip vortices formation",
      "Static electricity discharge",
      "Hydraulic turbulence",
      "Fuel vaporization"
    ],
    "answer": 0,
    "explanation": "Pressure differences create wingtip vortices."
  },
  {
    "id": 163,
    "question": "What maintenance procedure is required when an aircraft fastener requires tightening according to manufacturer torque specifications?",
    "options": [
      "Use of calibrated torque wrench during installation",
      "Tightening by hand estimation",
      "Applying maximum available force",
      "Using generic tools without measurement"
    ],
    "answer": 0,
    "explanation": "Torque wrenches ensure correct fastener tension."
  },
  {
    "id": 164,
    "question": "Which aircraft system stores electrical energy to provide power during engine startup or generator failure?",
    "options": [
      "Aircraft battery system",
      "Hydraulic pump system",
      "Rotor blade pitch system",
      "Fuel pressure regulator"
    ],
    "answer": 0,
    "explanation": "Batteries provide backup electrical power."
  },
  {
    "id": 165,
    "question": "Which helicopter aerodynamic condition occurs when descending vertically into disturbed rotor downwash airflow?",
    "options": [
      "Vortex ring state condition",
      "Static hover condition",
      "Hydraulic stall condition",
      "Electrical overload condition"
    ],
    "answer": 0,
    "explanation": "Vortex ring state reduces lift during steep descent."
  },
  {
    "id": 166,
    "question": "What is the primary purpose of aircraft fuel boost pumps installed within fuel delivery systems?",
    "options": [
      "Maintain consistent fuel pressure to engine components",
      "Increase aircraft electrical voltage output",
      "Reduce aerodynamic drag on aircraft wings",
      "Improve landing gear braking performance"
    ],
    "answer": 0,
    "explanation": "Boost pumps ensure reliable fuel flow."
  },
  {
    "id": 167,
    "question": "Which aircraft landing gear component absorbs impact loads when the aircraft touches down on the runway?",
    "options": [
      "Oleo or shock strut assembly",
      "Static discharge wick",
      "Electrical inverter system",
      "Fuel vent valve"
    ],
    "answer": 0,
    "explanation": "Shock struts absorb landing forces."
  },
  {
    "id": 168,
    "question": "Which factor most frequently contributes to human error during aircraft maintenance operations?",
    "options": [
      "Technician fatigue and communication breakdowns",
      "Use of maintenance manuals",
      "Routine training programs",
      "Organized maintenance facilities"
    ],
    "answer": 0,
    "explanation": "Fatigue and communication issues cause many errors."
  },
  {
    "id": 169,
    "question": "Which aerodynamic force acts parallel to airflow and opposes the forward motion produced by aircraft engines?",
    "options": [
      "Drag force",
      "Lift force",
      "Weight force",
      "Thrust force"
    ],
    "answer": 0,
    "explanation": "Drag resists forward aircraft movement."
  },
  {
    "id": 170,
    "question": "Which aircraft instrument provides pilots with engine rotational speed readings during flight operations?",
    "options": [
      "Tachometer instrument gauge",
      "Vertical speed indicator",
      "Magnetic compass",
      "Cabin pressure gauge"
    ],
    "answer": 0,
    "explanation": "Tachometers measure engine RPM."
  },
  {
    "id": 171,
    "question": "Which aircraft system mixes fuel and air before combustion occurs in piston aircraft engines?",
    "options": [
      "Carburetor or fuel injection system",
      "Hydraulic pressure system",
      "Electrical distribution system",
      "Static air pressure system"
    ],
    "answer": 0,
    "explanation": "These systems prepare the combustible mixture."
  },
  {
    "id": 172,
    "question": "Which maintenance inspection technique uses fluorescent dye to reveal cracks on metal surfaces?",
    "options": [
      "Dye penetrant non-destructive testing method",
      "Hydraulic pressure test procedure",
      "Aerodynamic stress test",
      "Electrical resistance test"
    ],
    "answer": 0,
    "explanation": "Dye penetrant reveals surface cracks."
  },
  {
    "id": 173,
    "question": "What is the primary purpose of performing weight and balance calculations prior to aircraft flight operations?",
    "options": [
      "Ensure center of gravity remains within safe operational limits",
      "Increase passenger seating capacity",
      "Improve cockpit instrument display brightness",
      "Reduce engine maintenance intervals"
    ],
    "answer": 0,
    "explanation": "Proper CG ensures stability and safe flight."
  },
  {
    "id": 174,
    "question": "Which aircraft component provides directional yaw control during helicopter flight operations?",
    "options": [
      "Tail rotor assembly",
      "Wing flap system",
      "Cabin ventilation system",
      "Electrical inverter"
    ],
    "answer": 0,
    "explanation": "Tail rotor controls yaw."
  },
  {
    "id": 175,
    "question": "Which maintenance action must an AME perform before signing a maintenance release certifying aircraft airworthiness?",
    "options": [
      "Verify all work complies with regulatory requirements and manufacturer procedures",
      "Confirm passenger seating arrangement",
      "Approve airline ticket pricing",
      "Determine aircraft route schedule"
    ],
    "answer": 0,
    "explanation": "AMEs certify that maintenance meets regulatory standards."
  },
  {
    "id": 176,
    "question": "Which aerodynamic principle explains lift creation by equal and opposite reaction when air is pushed downward by wings or rotor blades?",
    "options": [
      "Newton’s Third Law of Motion",
      "Ohm’s electrical law",
      "Pascal’s hydraulic law",
      "Boyle’s gas law"
    ],
    "answer": 0,
    "explanation": "Newton’s third law explains reaction forces generating lift."
  },
  {
    "id": 177,
    "question": "Which aircraft system uses pressurized hydraulic fluid to operate heavy mechanical components like landing gear and brakes?",
    "options": [
      "Hydraulic power system",
      "Static air pressure system",
      "Electrical distribution system",
      "Fuel metering system"
    ],
    "answer": 0,
    "explanation": "Hydraulic systems transmit force efficiently."
  },
  {
    "id": 178,
    "question": "Which aircraft maintenance record tracks all inspections, repairs, and modifications performed throughout the aircraft’s operational life?",
    "options": [
      "Aircraft technical logbook",
      "Passenger manifest",
      "Weather forecast report",
      "Airline marketing plan"
    ],
    "answer": 0,
    "explanation": "Technical logs document maintenance history."
  },
  {
    "id": 179,
    "question": "Which aerodynamic force acts perpendicular to airflow and supports aircraft weight during flight?",
    "options": [
      "Lift force",
      "Drag force",
      "Weight force",
      "Friction force"
    ],
    "answer": 0,
    "explanation": "Lift counteracts gravity."
  },
  {
    "id": 180,
    "question": "Which helicopter flight control allows pilots to tilt the rotor disc to control forward or lateral movement?",
    "options": [
      "Cyclic control stick",
      "Collective pitch lever",
      "Tail rotor pedals",
      "Engine throttle control"
    ],
    "answer": 0,
    "explanation": "Cyclic changes blade pitch positionally."
  },
  {
    "id": 181,
    "question": "Which maintenance program identifies potential hazards and improves operational safety through risk management practices?",
    "options": [
      "Safety Management System (SMS)",
      "Passenger comfort program",
      "Aircraft repainting program",
      "Airline marketing program"
    ],
    "answer": 0,
    "explanation": "SMS focuses on proactive safety management."
  },
  {
    "id": 182,
    "question": "Which aircraft electrical component protects circuits from excessive current and potential fire hazards?",
    "options": [
      "Circuit breaker device",
      "Hydraulic accumulator",
      "Fuel vent valve",
      "Rotor blade hinge"
    ],
    "answer": 0,
    "explanation": "Circuit breakers stop overload current flow."
  },
  {
    "id": 183,
    "question": "Which factor most significantly affects helicopter hover performance capability?",
    "options": [
      "Available engine power and rotor blade efficiency",
      "Aircraft exterior paint quality",
      "Cabin interior lighting",
      "Passenger seating layout"
    ],
    "answer": 0,
    "explanation": "Hover requires sufficient lift and power."
  },
  {
    "id": 184,
    "question": "Which aircraft structural component helps distribute aerodynamic loads across wing surfaces?",
    "options": [
      "Wing ribs and spars assembly",
      "Electrical wiring harness",
      "Cabin ventilation ducts",
      "Fuel quantity indicators"
    ],
    "answer": 0,
    "explanation": "Spars and ribs support structural loads."
  },
  {
    "id": 185,
    "question": "Which aircraft maintenance practice helps ensure correct movement of flight control surfaces after repairs?",
    "options": [
      "Flight control rigging and operational checks",
      "Increasing hydraulic pressure levels",
      "Reducing engine RPM",
      "Adjusting cockpit lighting"
    ],
    "answer": 0,
    "explanation": "Rigging checks ensure proper control movement."
  },
  {
    "id": 186,
    "question": "Which aerodynamic phenomenon causes swirling air patterns behind rotating helicopter blades during lift production?",
    "options": [
      "Rotor vortex formation",
      "Electrical discharge event",
      "Hydraulic oscillation",
      "Fuel vaporization"
    ],
    "answer": 0,
    "explanation": "Rotor vortices form due to pressure differences."
  },
  {
    "id": 187,
    "question": "Which aircraft system regulates cabin pressure and air temperature at high altitudes?",
    "options": [
      "Environmental control system",
      "Fuel injection system",
      "Hydraulic braking system",
      "Rotor blade pitch system"
    ],
    "answer": 0,
    "explanation": "Environmental systems maintain cabin conditions."
  },
  {
    "id": 188,
    "question": "Which maintenance factor most directly improves long-term reliability of aircraft engines?",
    "options": [
      "Regular lubrication inspections and oil analysis programs",
      "Increasing engine operating temperatures",
      "Eliminating inspection intervals",
      "Reducing maintenance documentation"
    ],
    "answer": 0,
    "explanation": "Oil analysis helps detect internal wear early."
  },
  {
    "id": 189,
    "question": "Which aircraft instrument measures the rate of climb or descent during flight?",
    "options": [
      "Vertical speed indicator",
      "Tachometer gauge",
      "Magnetic compass",
      "Fuel pressure indicator"
    ],
    "answer": 0,
    "explanation": "VSI shows vertical speed."
  },
  {
    "id": 190,
    "question": "Which helicopter aerodynamic maneuver allows controlled descent after engine failure?",
    "options": [
      "Autorotation maneuver",
      "Static hover condition",
      "Hydraulic boost maneuver",
      "Dynamic roll maneuver"
    ],
    "answer": 0,
    "explanation": "Autorotation allows safe landing without engine power."
  },
  {
    "id": 191,
    "question": "Which aircraft maintenance procedure ensures corrosion is removed and protective coatings are applied to exposed metal surfaces?",
    "options": [
      "Corrosion inspection and treatment program",
      "Engine thrust calibration",
      "Electrical voltage regulation",
      "Fuel flow adjustment"
    ],
    "answer": 0,
    "explanation": "Corrosion control protects structural integrity."
  },
  {
    "id": 192,
    "question": "Which aircraft system delivers lubricating oil to moving engine components to reduce friction and wear?",
    "options": [
      "Engine lubrication system",
      "Fuel metering system",
      "Electrical distribution system",
      "Hydraulic braking system"
    ],
    "answer": 0,
    "explanation": "Lubrication reduces friction and heat."
  },
  {
    "id": 193,
    "question": "Which maintenance factor must always be verified before aircraft return to service following major repairs?",
    "options": [
      "Compliance with regulatory standards and successful functional system checks",
      "Passenger seating capacity",
      "Airline ticket pricing",
      "Aircraft paint condition"
    ],
    "answer": 0,
    "explanation": "Repairs must be verified and approved."
  },
  {
    "id": 194,
    "question": "Which helicopter control input primarily affects vertical climb and descent during flight?",
    "options": [
      "Collective pitch lever",
      "Tail rotor pedals",
      "Cyclic stick",
      "Electrical switch panel"
    ],
    "answer": 0,
    "explanation": "Collective changes lift."
  },
  {
    "id": 195,
    "question": "Which aerodynamic force acts opposite gravity and supports aircraft weight during flight?",
    "options": [
      "Lift force",
      "Drag force",
      "Thrust force",
      "Friction force"
    ],
    "answer": 0,
    "explanation": "Lift keeps aircraft airborne."
  },
  {
    "id": 196,
    "question": "Which aircraft maintenance factor most strongly contributes to preventing maintenance- related accidents?",
    "options": [
      "Strict adherence to maintenance procedures and safety regulations",
      "Increasing aircraft cruising speed",
      "Reducing documentation",
      "Eliminating inspection programs"
    ],
    "answer": 0,
    "explanation": "Compliance with procedures ensures safety."
  },
  {
    "id": 197,
    "question": "Which aircraft documentation outlines detailed inspection intervals and maintenance schedules for specific aircraft models?",
    "options": [
      "Aircraft maintenance planning document or maintenance schedule",
      "Passenger seating chart",
      "Airport weather report",
      "Airline marketing brochure"
    ],
    "answer": 0,
    "explanation": "Maintenance schedules define required inspections."
  },
  {
    "id": 198,
    "question": "Which helicopter component provides anti-torque control during flight by producing sideways thrust?",
    "options": [
      "Tail rotor assembly",
      "Wing flap mechanism",
      "Cabin ventilation fan",
      "Fuel vent valve"
    ],
    "answer": 0,
    "explanation": "Tail rotor counters main rotor torque."
  },
  {
    "id": 199,
    "question": "Which inspection method allows technicians to identify structural cracks without removing the component from the aircraft?",
    "options": [
      "Non-destructive testing procedures",
      "Structural disassembly inspection",
      "Aerodynamic load testing",
      "Engine power testing"
    ],
    "answer": 0,
    "explanation": "NDT detects flaws without damaging parts."
  },
  {
    "id": 200,
    "question": "What is the ultimate responsibility of a licensed Aircraft Maintenance Engineer when approving an aircraft for return to service after maintenance?",
    "options": [
      "Certify that the aircraft meets regulatory requirements and is safe for flight operations",
      "Determine airline ticket pricing policies",
      "Schedule passenger boarding procedures",
      "Select airport departure gates"
    ],
    "answer": 0,
    "explanation": "The AME’s signature confirms the aircraft is airworthy and compliant with regulations."
  }
];
