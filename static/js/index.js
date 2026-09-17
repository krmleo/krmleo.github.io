// =====================================================
// Karameldeen Omer — Research Portfolio JS
// =====================================================

// ---- All paper data ----
var PAPERS = {
  'frontiers25': {
    venue: 'Frontiers in Robotics and AI · 2025',
    title: 'Multi-Layer Robotic Controller for Enhancing the Safety of Mobile Robot Navigation in Human-Centered Indoor Environments',
    authors: 'Karameldeen Omer, Andrea Monteriù',
    abstract: 'This paper presents the full integrated three-layer control system for indoor mobile robot navigation in spaces shared with elderly or disabled individuals. The system combines a BCI human-in-the-loop layer exploiting Error-Related Potentials (ErrP), a semi-online virtual borders layer using ROS and point cloud data, and an offline semantic BIM-based path planning layer. Together, the three layers provide a user-centric, safe navigation solution for vulnerable occupant environments.',
    image: 'static/images/bim_pipeline.png',
    emoji: '🤖',
    bib: '@article{omer2025multilayer,\n  author  = {Omer, Karameldeen and Monteriù, Andrea},\n  title   = {Multi-layer robotic controller for enhancing the safety of mobile\n             robot navigation in human-centered indoor environments},\n  journal = {Frontiers in Robotics and AI},\n  volume  = {12},\n  pages   = {1629931},\n  year    = {2025},\n  publisher = {Frontiers Media SA},\n  doi     = {10.3389/frobt.2025.1629931}\n}',
    link: 'https://www.frontiersin.org/articles/10.3389/frobt.2025.1629931',
    linkLabel: 'Open Journal'
  },
  'frontiers22': {
    venue: 'Frontiers in Robotics and AI · 2022',
    title: 'A Human-in-the-Loop Approach for Enhancing Mobile Robot Navigation in Presence of Obstacles Not Detected by the Sensory Set',
    authors: 'Francesco Ferracuti, Alessandro Freddi, Sabrina Iarlori, Andrea Monteriù, Karameldeen Ibrahim Mohamed Omer, Camillo Porcaro',
    abstract: 'Human-robot interaction (HRI) studies realistic and applicable solutions for assisting both healthy and disabled people in their Activities of Daily Living (ADL). This work designs a Brain-Computer Interface (BCI) protocol exploiting EEG Error-Related Potentials (ErrP) to detect when a human observer perceives robot navigation errors. The classified EEG signals are used as real-time corrective feedback in the ROS robot navigation control loop, validated on 10 healthy subjects.',
    image: 'static/images/ros_nav.jpg',
    emoji: '🧠',
    bib: '@article{ferracuti2022humanloop,\n  author  = {Ferracuti, Francesco and Freddi, Alessandro and Iarlori, Sabrina\n             and Monteriù, Andrea and Omer, Karameldeen Ibrahim Mohamed and Porcaro, Camillo},\n  title   = {A human-in-the-loop approach for enhancing mobile robot navigation\n             in presence of obstacles not detected by the sensory set},\n  journal = {Frontiers in Robotics and AI},\n  volume  = {9},\n  pages   = {909971},\n  year    = {2022},\n  publisher = {Frontiers Media SA},\n  doi     = {10.3389/frobt.2022.909971}\n}',
    link: 'https://www.frontiersin.org/articles/10.3389/frobt.2022.909971',
    linkLabel: 'Open Journal'
  },
  'brainsci': {
    venue: 'Brain Sciences · MDPI 2025',
    title: 'Real-Time Mobile Robot Obstacles Detection and Avoidance Through EEG Signals',
    authors: 'Karameldeen Omer, Francesco Ferracuti, Alessandro Freddi, Sabrina Iarlori, Francesco Vella, Andrea Monteriù',
    abstract: 'This paper extends the passive BCI approach to real-time mobile robot obstacle detection and avoidance using EEG signals. The passive BCI method based on Error-Related Potentials (ErrP) classifies brain signals in real time to detect human-perceived robot errors, enabling the robot to avoid obstacles invisible to its onboard sensors. The study validates the approach with human subjects and integrates the classifier into the ROS navigation stack.',
    image: 'static/images/eeg_4class_channels.png',
    emoji: '🧠',
    bib: '@article{omer2025brainsci,\n  author  = {Omer, Karameldeen and Ferracuti, Francesco and Freddi, Alessandro\n             and Iarlori, Sabrina and Vella, Francesco and Monteriù, Andrea},\n  title   = {Real-time mobile robot obstacles detection and avoidance through {EEG} signals},\n  journal = {Brain Sciences},\n  volume  = {15},\n  number  = {4},\n  pages   = {359},\n  year    = {2025},\n  publisher = {MDPI},\n  doi     = {10.3390/brainsci15040359}\n}',
    link: 'https://doi.org/10.3390/brainsci15040359',
    linkLabel: 'Open Journal'
  },
  'icara23': {
    venue: 'ICARA 2023 · IEEE — pp. 192–196',
    title: 'An Effective Method for Creating Virtual Doors and Borders to Prevent Autonomous Mobile Robots from Entering Restricted Areas',
    authors: 'Karameldeen Omer, Andrea Monteriù',
    abstract: 'Autonomous mobile robots in smart homes and industries often need to be restricted from specific areas. This work presents a method for creating virtual walls, doors, and borders using ROS and point cloud data — without requiring specialised sensors or hardware. The virtual borders are published as sensor topics to update the robot\'s cost map and can be created, activated, and deactivated remotely via cloud or Wi-Fi. The method is demonstrated in Gazebo simulation with a wheelchair robot navigating a corridor reconstructed from a real environment.',
    image: 'static/images/multi_doors.png',
    emoji: '🚧',
    bib: '@inproceedings{omer2023virtual,\n  author    = {Omer, Karameldeen and Monteriù, Andrea},\n  title     = {An effective method for creating virtual doors and borders to prevent\n               autonomous mobile robots from entering restricted areas},\n  booktitle = {2023 9th International Conference on Automation, Robotics and\n               Applications (ICARA)},\n  pages     = {192--196},\n  year      = {2023},\n  publisher = {IEEE}\n}',
    link: 'https://ieeexplore.ieee.org/',
    linkLabel: 'IEEE Xplore'
  },
  'icara24': {
    venue: 'ICARA 2024 · IEEE — pp. 185–190',
    title: 'Semantic-Enhanced Path Planning for Safety-Centric Indoor Robots Navigation',
    authors: 'Karameldeen Omer, Elena Torta, Andrea Monteriù',
    abstract: 'This paper presents a semantic path planning approach that integrates Building Information Modeling (BIM) data into robot navigation. Semantic and metric data from the building digital twin is stored in an RDF graph database and used to generate robot-specific 2D navigation maps. A modified A* path planner assigns semantic penalties based on proximity to walls, glass partitions, and other obstacle classes, enabling context-aware, safety-centric navigation inside large smart buildings.',
    image: 'static/images/bim_pipeline.png',
    emoji: '🗺️',
    bib: '@inproceedings{omer2024semantic,\n  author    = {Omer, Karameldeen and Torta, Elena and Monteriù, Andrea},\n  title     = {Semantic-enhanced path planning for safety-centric indoor robots navigation},\n  booktitle = {2024 10th International Conference on Automation, Robotics and\n               Applications (ICARA)},\n  pages     = {185--190},\n  year      = {2024},\n  publisher = {IEEE}\n}',
    link: 'https://ieeexplore.ieee.org/',
    linkLabel: 'IEEE Xplore'
  },
  'robocup24': {
    venue: 'RoboCup / Robot World Cup 2024 · Springer — pp. 56–67',
    title: 'Semantic Path Planning for Heterogeneous Robots from Building Digital Twin Data',
    authors: 'Karameldeen Omer, Koen de Vos, Pieter Pauwels, Elena Torta, Andrea Monteriù',
    abstract: 'This paper presents an innovative approach to semantic path planning for mobile robots by integrating semantic data from building digital twins. Semantic and metric information extracted from the digital twin is used to assign weights to a connectivity graph, allowing path computation using the A* algorithm. Robot-specific maps combine both geometric and semantic data, diverging from traditional static maps. The semantic integration equips robots with diverse navigation skills for large smart facilities.',
    image: 'static/images/semantic_astar.png',
    emoji: '🗺️',
    bib: '@inproceedings{omer2024bimplanning,\n  author    = {Omer, Karameldeen and de Vos, Koen and Pauwels, Pieter\n               and Torta, Elena and Monteriù, Andrea},\n  title     = {Semantic path planning for heterogeneous robots from building digital twin data},\n  booktitle = {Robot World Cup},\n  pages     = {56--67},\n  year      = {2024},\n  publisher = {Springer Nature Switzerland}\n}',
    link: '#bibtex',
    linkLabel: 'Springer'
  },
  'metrox22': {
    venue: 'IEEE MetroXRAINE 2022 · pp. 416–421',
    title: 'Human-in-the-Loop Approach for Enhanced Mobile Robot Navigation',
    authors: 'Karameldeen Omer, Francesco Ferracuti, Alessandro Freddi, Sabrina Iarlori, Andrea Monteriù, Camillo Porcaro',
    abstract: 'This paper designs a BCI protocol to exploit EEG Error-Related Potentials (ErrP) for real-time human-in-the-loop robot navigation correction. The protocol uses an "oddball paradigm" with 200 trials of robot navigation videos, 20% showing obstacle collisions. EEG signals from 10 healthy subjects are processed using EEGLAB and BCILAB. The results demonstrate the feasibility of passive BCI integration into the ROS mobile robot control loop for enhanced obstacle avoidance.',
    image: 'static/images/eeg_4class_channels.png',
    emoji: '📡',
    bib: '@inproceedings{omer2022metrox,\n  author    = {Omer, Karameldeen and Ferracuti, Francesco and Freddi, Alessandro\n               and Iarlori, Sabrina and Monteriù, Andrea and Porcaro, Camillo},\n  title     = {Human-in-the-loop approach for enhanced mobile robot navigation},\n  booktitle = {2022 IEEE International Conference on Metrology for Extended Reality,\n               Artificial Intelligence and Neural Engineering (MetroXRAINE)},\n  pages     = {416--421},\n  year      = {2022},\n  publisher = {IEEE}\n}',
    link: 'https://ieeexplore.ieee.org/',
    linkLabel: 'IEEE Xplore'
  },
  'mfi23': {
    venue: 'IEEE MetroXRAINE 2023 · pp. 787–792',
    title: 'Mental Fatigue Evaluation for Passive and Active BCI Methods for Wheelchair-Robot During Human-in-the-Loop Control',
    authors: 'Karameldeen Omer, Francesco Vella, Francesco Ferracuti, Alessandro Freddi, Sabrina Iarlori, Andrea Monteriù',
    abstract: 'This paper investigates mental load and fatigue during prolonged BCI human-in-the-loop tasks involving human observation and error perception for wheelchair-robot navigation correction. The study compares passive ErrP-based BCI with active methods (P300, SSVEP) using the Mental Fatigue Index (MFI) and EEG power-ratio indices. Results show that passive BCIs induce lower mental fatigue, making them more suitable for elderly or disabled users, though ErrP exhibits lower task engagement and classification accuracy.',
    image: null,
    emoji: '⚡',
    gradient: 'linear-gradient(135deg,#0e5c5c,#0f2044)',
    bib: '@inproceedings{omer2023mentalfatigue,\n  author    = {Omer, Karameldeen and Vella, Francesco and Ferracuti, Francesco\n               and Freddi, Alessandro and Iarlori, Sabrina and Monteriù, Andrea},\n  title     = {Mental fatigue evaluation for passive and active {BCI} methods\n               for wheelchair-robot during human-in-the-loop control},\n  booktitle = {2023 IEEE International Conference on Metrology for eXtended Reality,\n               Artificial Intelligence and Neural Engineering (MetroXRAINE)},\n  pages     = {787--792},\n  year      = {2023},\n  publisher = {IEEE}\n}',
    link: 'https://ieeexplore.ieee.org/',
    linkLabel: 'IEEE Xplore'
  },
  'icesat23': {
    venue: 'IEEE ICESAT 2023 · p. 237',
    title: 'Enhancing Lives with Brain-Robot Interfacing',
    authors: 'Karameldeen Omer',
    abstract: 'This paper presents an overview of Brain-Computer Interface (BCI) and Brain-Robot Interaction (BRI) applications for enhancing the quality of life of both healthy and disabled individuals. The work covers passive and active BCI paradigms in the context of assistive robotics, highlighting the potential of brain-robot interfacing to support Activities of Daily Living (ADL) with minimal physical effort.',
    image: null,
    emoji: '🔬',
    gradient: 'linear-gradient(135deg,#2c3e50,#1abc9c)',
    bib: '@inproceedings{omer2023icesat,\n  author    = {Omer, Karameldeen},\n  title     = {Enhancing Lives with Brain-Robot Interfacing},\n  booktitle = {2023 International Conference on Engineering, Science and\n               Advanced Technology (ICESAT)},\n  pages     = {237},\n  year      = {2023},\n  publisher = {IEEE}\n}',
    link: 'https://ieeexplore.ieee.org/',
    linkLabel: 'IEEE Xplore'
  },
  'metrox25errp': {
    venue: 'IEEE MetroXRAINE 2025 · pp. 1131–1135',
    title: 'Multi-Class Error-Related Potentials for Correcting Robot Navigation Mistakes: A Human-in-the-Loop Approach Using EEG Brain-Robot-Interfacing',
    authors: 'Karameldeen Omer, Francesco Ferracuti, Alessandro Freddi, Sabrina Iarlori, Andrea Monteriù',
    abstract: 'This study explores the integration of passive Brain-Computer Interfaces (BCIs) into robotic navigation to enhance obstacle detection by incorporating human cognitive feedback. Using multi-class classification of Error-related Potentials (ErrPs), the system distinguishes four navigation error severity levels — enabling finer-grained corrective signals compared to binary error detection. The approach is validated on EEG data from human subjects during robot navigation observation experiments.',
    image: 'static/images/eeg_4class_channels.png',
    emoji: '🧠',
    bib: '@inproceedings{omer2025multiclass,\n  author    = {Omer, Karameldeen and Ferracuti, Francesco and Freddi, Alessandro\n               and Iarlori, Sabrina and Monteriù, Andrea},\n  title     = {Multi-Class Error-Related Potentials for Correcting Robot Navigation\n               Mistakes: A Human-in-the-Loop Approach Using {EEG} Brain-Robot-Interfacing},\n  booktitle = {2025 IEEE International Conference on Metrology for eXtended Reality,\n               Artificial Intelligence and Neural Engineering (MetroXRAINE)},\n  pages     = {1131--1135},\n  year      = {2025},\n  publisher = {IEEE}\n}',
    link: 'https://ieeexplore.ieee.org/',
    linkLabel: 'IEEE Xplore'
  },
  'ssvep25': {
    venue: 'IEEE MetroXRAINE 2025 · pp. 1194–1199',
    title: 'Towards Effortless Brain-Computer Interaction: An SSVEP-Based BCI with Object Detection in FPV',
    authors: 'Karameldeen Omer, Andrea Monteriù',
    abstract: 'This research addresses one of the key challenges in conventional SSVEP Brain-Computer Interfaces used in assistive robotics: their dependence on mentally fatiguing screen-based flicker stimuli. The paper proposes an SSVEP-based active BCI using object detection in first-person view (FPV) to enable more natural and effortless control of assistive robots without dedicated flickering displays.',
    image: 'static/images/ssvep_experiment.png',
    emoji: '👁️',
    bib: '@inproceedings{omer2025ssvep,\n  author    = {Omer, Karameldeen and Monteriù, Andrea},\n  title     = {Towards Effortless Brain-Computer Interaction:\n               An {SSVEP}-Based {BCI} with Object Detection in {FPV}},\n  booktitle = {2025 IEEE International Conference on Metrology for eXtended Reality,\n               Artificial Intelligence and Neural Engineering (MetroXRAINE)},\n  pages     = {1194--1199},\n  year      = {2025},\n  publisher = {IEEE}\n}',
    link: 'https://ieeexplore.ieee.org/',
    linkLabel: 'IEEE Xplore'
  },
  'edgeimp26': {
    venue: 'IEEE ICARA 2026 · pp. 545–549',
    title: 'Leveraging Edge Impulse for Multi-Class Error-Related Potentials: Edge AI Brain-Robot Interface for Correcting Navigation Errors in Assistive Mobile Robot Wheelchairs',
    authors: 'Karameldeen Omer, Andrea Monteriù',
    abstract: 'This paper deploys multi-class ErrP classification on edge hardware using the Edge Impulse platform for an embedded, real-time BCI navigation correction system on assistive mobile robot wheelchairs. The approach enables on-device inference without cloud dependency, making it practical for real-world assistive technology deployment.',
    image: 'static/images/edge_impulse_allsub.png',
    emoji: '⚡',
    bib: '@inproceedings{omer2026edgeimpulse,\n  author    = {Omer, Karameldeen and Monteriù, Andrea},\n  title     = {Leveraging Edge Impulse for Multi-Class Error-Related Potentials:\n               Edge {AI} Brain-Robot Interface for Correcting Navigation Errors\n               in Assistive Mobile Robot Wheelchairs},\n  booktitle = {2026 12th International Conference on Automation, Robotics and\n               Applications (ICARA)},\n  pages     = {545--549},\n  year      = {2026},\n  publisher = {IEEE}\n}',
    link: 'https://ieeexplore.ieee.org/',
    linkLabel: 'IEEE Xplore'
  },
  'livenv25': {
    venue: 'IEEE MetroLivEnv 2025 · pp. 490–494',
    title: 'Edge AI for Object Recognition in Digital Twins: Enhancing Indoor Navigation and BIM Systems for Living Environments',
    authors: 'Karameldeen Omer, Andrea Monteriù',
    abstract: 'This paper integrates Edge AI object recognition capabilities with Building Information Modeling (BIM) digital twins to enhance indoor robot navigation and safety in living environments. The approach enables real-time semantic understanding of the environment by combining edge-deployed neural networks with the rich semantic context of BIM models.',
    image: 'static/images/bim_3dmodel.png',
    emoji: '🏗️',
    bib: '@inproceedings{omer2025edgeai,\n  author    = {Omer, Karameldeen and Monteriù, Andrea},\n  title     = {Edge {AI} for object recognition in digital twins: enhancing\n               indoor navigation and {BIM} systems for living environments},\n  booktitle = {2025 IEEE International Workshop on Metrology for Living Environment\n               (MetroLivEnv)},\n  pages     = {490--494},\n  year      = {2025},\n  publisher = {IEEE}\n}',
    link: 'https://ieeexplore.ieee.org/',
    linkLabel: 'IEEE Xplore'
  },
  'vlm26': {
    venue: 'IEEE MetroXRAINE 2026',
    title: 'Leveraging Vision-Language Foundation Models to Enhance Assistive Non-Invasive Brain-Computer Interfaces in VR and Robotic Applications',
    authors: 'Karameldeen Omer, Andrea Monteriù',
    abstract: 'Non-invasive Brain-Computer Interfaces (BCIs) provide individuals with motor impairments a direct channel for controlling assistive technologies; however, their widespread adoption is constrained by the substantial cognitive workload of conventional paradigms. This paper proposes leveraging Vision-Language Foundation Models (VLMs) to reduce cognitive load in BCI paradigms, enabling more natural and intuitive control of assistive technologies in VR and robotic applications.',
    image: 'static/images/vlm_bci_protocol.png',
    emoji: '🤖',
    bib: '@inproceedings{omer2026vlmbci,\n  author    = {Omer, Karameldeen and Monteriù, Andrea},\n  title     = {Leveraging Vision-Language Foundation Models to Enhance Assistive\n               Non-Invasive Brain-Computer Interfaces in {VR} and Robotic Applications},\n  booktitle = {2026 IEEE International Conference on Metrology for eXtended Reality,\n               Artificial Intelligence and Neural Engineering (MetroXRAINE)},\n  year      = {2026},\n  publisher = {IEEE}\n}',
    link: '#bibtex',
    linkLabel: 'IEEE'
  },
  'cogaal26': {
    venue: 'IEEE MetroLivEnv 2026 · pp. 157–161',
    title: 'CogAAL: A Privacy-Preserving, Full-Stack Cognitive Architecture Integrating Local VLMs, Heterogeneous Robotics, and IoT for Proactive Ambient Assisted Living',
    authors: 'Karameldeen Omer, Francesco Ferracuti, Andrea Monteriù',
    abstract: 'CogAAL is a unified and privacy-preserving cognitive architecture for proactive Ambient Assisted Living (AAL). Existing AAL frameworks are typically fragmented across perception, reasoning, and actuation layers, and frequently depend on cloud-based inference pipelines that conflict with user privacy. CogAAL integrates local Vision-Language Models (VLMs), heterogeneous robots, and IoT sensors in a fully on-premises architecture that enables proactive monitoring and intervention for older adults and individuals with disabilities.',
    image: null,
    emoji: '🏠',
    gradient: 'linear-gradient(135deg,#1a3a6b,#17a589)',
    bib: '@inproceedings{omer2026cogaal,\n  author    = {Omer, Karameldeen and Ferracuti, Francesco and Monteriù, Andrea},\n  title     = {{CogAAL}: A Privacy-Preserving, Full-Stack Cognitive Architecture\n               Integrating Local {VLM}s, Heterogeneous Robotics, and {IoT}\n               for Proactive Ambient Assisted Living},\n  booktitle = {2026 IEEE International Workshop on Metrology for Living Environment\n               (MetroLivEnv)},\n  pages     = {157--161},\n  year      = {2026},\n  publisher = {IEEE}\n}',
    link: 'https://ieeexplore.ieee.org/',
    linkLabel: 'IEEE Xplore'
  },
  'embodied26': {
    venue: 'IEEE ICARA 2026 · pp. 42–47',
    title: 'Toward Embodied Intelligence: An Architecture for Natural Dialogue and Action Execution in Assistive Robots',
    authors: 'Karameldeen Omer, Andrea Monteriù',
    abstract: 'This paper presents an architecture enabling natural language dialogue and action execution for assistive robots, moving toward embodied artificial intelligence for Ambient Assisted Living environments. The system allows robots to understand and respond to natural speech, execute context-aware actions, and maintain multi-turn dialogue with users — enabling more intuitive human-robot interaction for elderly and disabled individuals.',
    image: null,
    emoji: '💬',
    gradient: 'linear-gradient(135deg,#2c3e50,#3498db)',
    bib: '@inproceedings{omer2026embodied,\n  author    = {Omer, Karameldeen and Monteriù, Andrea},\n  title     = {Toward Embodied Intelligence: An Architecture for Natural Dialogue\n               and Action Execution in Assistive Robots},\n  booktitle = {2026 12th International Conference on Automation, Robotics and\n               Applications (ICARA)},\n  pages     = {42--47},\n  year      = {2026},\n  publisher = {IEEE}\n}',
    link: 'https://ieeexplore.ieee.org/',
    linkLabel: 'IEEE Xplore'
  },

  'aicutting': {
    venue: 'Preprint · Under Review',
    title: 'Multimodal Deep Learning for Real-Time Fault Detection in Robotic Oxy-Fuel Steel Cutting Systems',
    authors: 'Karameldeen Omer et al.',
    abstract: 'Industrial oxy-fuel cutting typically operates under open-loop control, lacking real-time awareness of process instabilities that degrade cut quality and increase material waste. This paper presents a multimodal deep learning framework for fault detection in robotic cutting systems, combining vision and process signals to detect instabilities in real time and enabling closed-loop quality control in robotic manufacturing.',
    image: 'static/images/ai_cutting_heatmap.png',
    emoji: '🔥',
    bib: '@misc{omer2026aicutting,\n  author = {Omer, Karameldeen et al.},\n  title  = {Multimodal Deep Learning for Real-Time Fault Detection in\n            Robotic Oxy-Fuel Steel Cutting Systems},\n  year   = {2026},\n  note   = {Preprint / Under Review}\n}',
    link: '#bibtex',
    linkLabel: 'Preprint'
  },
  'ssvepshape': {
    venue: 'Under Review',
    title: 'Optimization of Shape, Chromatic Properties of SSVEP Stimuli for First-Person-View Brain-Computer Interfaces in Robotic and Virtual Reality Applications',
    authors: 'Karameldeen Omer, Andrea Monteriù',
    abstract: 'This study investigates the optimization of Steady-State Visual Evoked Potential (SSVEP) stimuli for Brain-Computer Interface (BCI) applications in dynamic first-person view (FPV) environments. We examine how stimulus shape, color, and texture — comparing solid fills to checkerboard patterns — affect SSVEP signal quality and BCI classification accuracy in robotic and virtual reality settings.',
    image: 'static/images/ssvep_stimuli.png',
    emoji: '🎨',
    bib: '@misc{omer2026ssvepshape,\n  author = {Omer, Karameldeen and Monteriù, Andrea},\n  title  = {Optimization of Shape, Chromatic Properties of {SSVEP} Stimuli for\n            First-Person-View Brain-Computer Interfaces in Robotic and\n            Virtual Reality Applications},\n  year   = {2026},\n  note   = {Under Review}\n}',
    link: '#bibtex',
    linkLabel: 'Under Review'
  }
};

document.addEventListener('DOMContentLoaded', function () {

  // ---- Build modal overlay ----
  var overlay = document.createElement('div');
  overlay.id = 'paper-modal-overlay';
  overlay.innerHTML = '<div class="modal-box" id="modal-box-inner"></div>';
  document.body.appendChild(overlay);

  // Close on backdrop click
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  // Close on ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  function openModal(id) {
    var p = PAPERS[id];
    if (!p) return;
    var imgHtml = '';
    if (p.image) {
      imgHtml = '<img class="modal-header-img" src="' + p.image + '" alt="' + p.title + '" onerror="this.style.display=\'none\'">';
    } else {
      imgHtml = '<div class="modal-header-placeholder" style="background:' + (p.gradient || 'linear-gradient(135deg,#0f2044,#1abc9c)') + '"><span style="font-size:4rem;">' + p.emoji + '</span></div>';
    }
    var linkBtn = '';
    if (p.link && p.link !== '#bibtex') {
      linkBtn = '<a href="' + p.link + '" target="_blank" class="primary"><i class="fas fa-external-link-alt"></i> ' + (p.linkLabel || 'Open') + '</a>';
    }
    var box = document.getElementById('modal-box-inner');
    box.innerHTML = imgHtml +
      '<button class="modal-close-btn" id="modal-close-btn" aria-label="Close"><i class="fas fa-times"></i></button>' +
      '<div class="modal-body">' +
        '<span class="modal-venue">' + p.venue + '</span>' +
        '<h2 class="modal-title">' + p.title + '</h2>' +
        '<p class="modal-authors"><i class="fas fa-users" style="margin-right:0.35rem;color:#1abc9c;"></i>' + p.authors + '</p>' +
        '<div class="modal-section-label"><i class="fas fa-align-left" style="margin-right:0.3rem;"></i>Abstract</div>' +
        '<p class="modal-abstract">' + p.abstract + '</p>' +
        '<div class="modal-section-label"><i class="fas fa-code" style="margin-right:0.3rem;"></i>BibTeX</div>' +
        '<div class="modal-bib-block">' +
          '<button class="modal-copy-btn" id="modal-copy-bib">Copy</button>' +
          '<pre id="modal-bib-text">' + p.bib + '</pre>' +
        '</div>' +
        '<div class="modal-action-links">' +
          linkBtn +
          '<a href="#bibtex"><i class="fas fa-quote-right"></i> All Citations</a>' +
        '</div>' +
      '</div>';
    overlay.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    // Close btn
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    // Copy bib
    document.getElementById('modal-copy-bib').addEventListener('click', function () {
      var text = document.getElementById('modal-bib-text').textContent;
      navigator.clipboard.writeText(text).then(function () {
        document.getElementById('modal-copy-bib').textContent = 'Copied!';
        setTimeout(function () { document.getElementById('modal-copy-bib').textContent = 'Copy'; }, 2000);
      });
    });
  }

  function closeModal() {
    overlay.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  // ---- Wire up paper cards ----
  document.querySelectorAll('.paper-card[data-paper-id]').forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') return; // allow link clicks
      var id = this.getAttribute('data-paper-id');
      openModal(id);
    });
  });

  // ---- BibTeX accordion toggles ----
  document.querySelectorAll('.bib-header').forEach(function (header) {
    header.addEventListener('click', function () {
      var body = this.nextElementSibling;
      var isOpen = body.classList.contains('show');
      document.querySelectorAll('.bib-body').forEach(function (b) { b.classList.remove('show'); });
      document.querySelectorAll('.bib-header').forEach(function (h) { h.classList.remove('open'); });
      if (!isOpen) { body.classList.add('show'); this.classList.add('open'); }
    });
  });

  // ---- Navbar burger ----
  var burger = document.querySelector('.navbar-burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var target = document.getElementById(this.dataset.target);
      this.classList.toggle('is-active');
      if (target) target.classList.toggle('is-active');
    });
  }

  // ---- Smooth scroll ----
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = this.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  // ---- Active navbar highlight ----
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.navbar-item[href^="#"]');
  function onScroll() {
    var scrollY = window.scrollY + 80;
    sections.forEach(function (sec) {
      if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(function (l) { l.classList.remove('is-active-nav'); });
        var active = document.querySelector('.navbar-item[href="#' + sec.id + '"]');
        if (active) active.classList.add('is-active-nav');
      }
    });
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

});

